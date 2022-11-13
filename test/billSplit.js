const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("BillSplit", () => {

    let deployer, initiator, depositor1, depositor2, depositor3
    let token, billSplit, amountOwed, transaction
    
    beforeEach(async () => {
        // Setup accounts
        let accounts = await ethers.getSigners()
        deployer = accounts[0]
        initiator = accounts[1]
        depositor1 = accounts[2]
        depositor2 = accounts[3]
        depositor3 = accounts[4]

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
            [depositor1.address, depositor2.address, depositor3.address],
            deployer.address,
            token.address
        )

        // Approve initiator and depositor accounts
        for(let i=1; i<5; i++) {
            transaction = await token.connect(deployer).approve(accounts[i].address, amountOwed)
            await transaction.wait()
        }

        // Approve contract account
        transaction = await token.connect(deployer).approve(billSplit.address, amountOwed)
        await transaction.wait()
        
    })

    describe("Deployment", () => {

        it("Returns Initiator Address", async() => {
            const result = await billSplit.initiator()
            expect(result).to.be.equal(initiator.address)
        })

        it("Returns Depositor1 Address", async() => {
            const result = await billSplit.depositors(0)
            expect(result).to.be.equal(depositor1.address)
        })

        it("Returns Depositor2 Address", async() => {
            const result = await billSplit.depositors(1)
            expect(result).to.be.equal(depositor2.address)
        })

        it("Returns Depositor3 Address", async() => {
            const result = await billSplit.depositors(2)
            expect(result).to.be.equal(depositor3.address)
        })

        it("Has the correct allowance for the depositor2", async() => {
            const result = await token.allowance(deployer.address, depositor1.address)
            expect(result).to.equal(amountOwed)
        })

        it("Has the correct allowance for the depositor2", async() => {
            const result = await token.allowance(deployer.address, depositor2.address)
            expect(result).to.equal(amountOwed)
        })

        it("Has the correct allowance for the depositor3", async() => {
            const result = await token.allowance(deployer.address, depositor3.address)
            expect(result).to.equal(amountOwed)
        })

        it("Has the correct allowance for the initiator", async() => {
            const result = await token.allowance(deployer.address, initiator.address)
            expect(result).to.equal(amountOwed)
        })

        it("Has the correct allowance for the contract", async() => {
            const result = await token.allowance(deployer.address, billSplit.address)
            expect(result).to.equal(amountOwed)
        })
    })

    describe("Splitting", () => {
        beforeEach("Allows the split initiator to begin a split", async() => {
            let transaction = await billSplit.connect(initiator).initiateSplit(tokens(2), [tokens(3), tokens(4), tokens(1)])
            await transaction.wait()

            await expect(transaction).to.emit(billSplit, 'SplitInitiated')
                .withArgs(initiator.address, tokens(10))
        })

        it("Allows depositor1 to add their share of the split", async() => {
            let transaction = await billSplit.connect(depositor1).split()
            await transaction.wait()

            await expect(transaction).to.emit(billSplit, 'DepositReceived')
                .withArgs(depositor1.address, tokens(3))
        })

        it("Allows depositor2 to add their share of the split", async() => {
            let transaction = await billSplit.connect(depositor2).split()
            await transaction.wait()

            await expect(transaction).to.emit(billSplit, 'DepositReceived')
                .withArgs(depositor2.address, tokens(4))
        })

        it("Allows depositor3 to add their share of the split", async() => {
            let transaction = await billSplit.connect(depositor3).split()
            await transaction.wait()

            await expect(transaction).to.emit(billSplit, 'DepositReceived')
                .withArgs(depositor3.address, tokens(1))
        })

        it("Initiator collects all of its funds", async() => {
            let transaction = await billSplit.connect(depositor1).split()
            transaction = await billSplit.connect(depositor2).split()
            transaction = await billSplit.connect(depositor3).split()
           
            transaction = await billSplit.connect(initiator).transferTotal()
            await transaction.wait()

            await expect(transaction).to.emit(billSplit, 'SplitCompleted')
                .withArgs(initiator.address, tokens(10))

            // Check initiators balance
            const result = await token.balanceOf(initiator.address)
            expect(result).to.equal(tokens(10))
        })

        it("Depositor1 balance is drained", async() => {
            const result = await token.balanceOf(depositor1.address)
            expect(result).to.equal(0)
        })

        it("Depositor2 balance is drained", async() => {
            const result = await token.balanceOf(depositor2.address)
            expect(result).to.equal(0)
        })

        it("Depositor3 balance is drained", async() => {
            const result = await token.balanceOf(depositor3.address)
            expect(result).to.equal(0)
        })
    })
});