const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("BillSplit", () => {

    let deployer, initiator, depositor
    let token, billSplit, amountOwed
    
    beforeEach(async () => {
        // Setup accounts
        [deployer, initiator, depositor] = await ethers.getSigners()
        amountOwed = tokens(10)

        // Load Contracts
        const BillSplit = await ethers.getContractFactory("BillSplit")
        const ERC20 = await ethers.getContractFactory('ERC20')
        
        // Deploy Token
        token = await ERC20.deploy('Ether', 'ETH', tokens(100))

        // Deploy Bill Split contract
        billSplit = await BillSplit.deploy(
            amountOwed,
            initiator.address,
            depositor.address,
            deployer.address,
            token.address
        )

        // Approve depositor account
        let transaction = await token.connect(deployer).approve(depositor.address, amountOwed)
        await transaction.wait()

        // Approve initiator account
        transaction = await token.connect(deployer).approve(initiator.address, tokens(100))
        await transaction.wait()

        // Approve contract account
        transaction = await token.connect(deployer).approve(billSplit.address, amountOwed)
        await transaction.wait()
        
    })

    describe("Deployment", () => {

        it("Returns Initiator Address", async() => {
            const result = await billSplit.initiator()
            expect(result).to.be.equal(initiator.address)
        })

        it("Returns Depositor Address", async() => {
            const result = await billSplit.depositor()
            expect(result).to.be.equal(depositor.address)
        })

        it("Has the correct allowance for the depositor", async() => {
            const result = await token.allowance(deployer.address, depositor.address)
            expect(result).to.equal(amountOwed)
        })

        it("Has the correct allowance for the initiator", async() => {
            const result = await token.allowance(deployer.address, initiator.address)
            expect(result).to.equal(tokens(100))
        })

        it("Has the correct allowance for the contract", async() => {
            const result = await token.allowance(deployer.address, billSplit.address)
            expect(result).to.equal(amountOwed)
        })
    })

    describe("Splitting", () => {
        beforeEach("Allows the split initiator to begin a split", async() => {
            let transaction = await billSplit.connect(initiator).initiateSplit(tokens(4), tokens(6))
            await transaction.wait()

            await expect(transaction).to.emit(billSplit, 'SplitInitiated')
                .withArgs(initiator.address, depositor.address, tokens(10))
        })

        it("Allows the depositor to add their share of the split", async() => {
            let transaction = await billSplit.connect(depositor).split()
            await transaction.wait()

            await expect(transaction).to.emit(billSplit, 'DepositReceived')
                .withArgs(depositor.address, tokens(6))
        })

        it("Initiator collects all of its funds", async() => {
            let transaction = await billSplit.connect(depositor).split()
            await transaction.wait()

            transaction = await billSplit.connect(initiator).transferTotal()
            await transaction.wait()

            await expect(transaction).to.emit(billSplit, 'SplitCompleted')
                .withArgs(initiator.address, tokens(10))

            // Check initiators balance
            const result = await token.balanceOf(initiator.address)
            expect(result).to.equal(tokens(10))
        })

        it("Depositors balance is drained", async() => {
            const result = await token.balanceOf(depositor.address)
            expect(result).to.equal(0)
        })
    })
});