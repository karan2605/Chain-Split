const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("BillSplit", () => {
  let deployer, initiator, depositor1, depositor2, depositor3;
  let token, splitExpenses, amountOwed, transaction;

  beforeEach(async () => {
    // Setup accounts
    let accounts = await ethers.getSigners();
    deployer = accounts[0];
    initiator = accounts[1];
    depositor1 = accounts[2];
    depositor2 = accounts[3];
    depositor3 = accounts[4];

    amountOwed = tokens(10);

    // Load Contracts
    const SplitExpenses = await ethers.getContractFactory("SplitExpenses");
    const ERC20 = await ethers.getContractFactory("ERC20");

    // Deploy Token
    token = await ERC20.deploy("Ether", "ETH", tokens(100));

    // Deploy Bill Split contract
    splitExpenses = await SplitExpenses.deploy(token.address, deployer.address);

    // Approve initiator and depositor accounts
    for (let i = 1; i < 5; i++) {
      transaction = await token
        .connect(deployer)
        .approve(accounts[i].address, amountOwed);
      await transaction.wait();
    }

    // Approve contract account
    transaction = await token
      .connect(deployer)
      .approve(splitExpenses.address, amountOwed);
    await transaction.wait();
  });

  describe("Deployment", () => {
    it("Create a new group", async () => {
      let transaction = await splitExpenses
        .connect(initiator)
        .initiateSplit(
          "group1",
          amountOwed,
          [
            initiator.address,
            depositor1.address,
            depositor2.address,
            depositor3.address,
          ],
          [tokens(2), tokens(3), tokens(4), tokens(1)]
        );

      await transaction.wait();

      await expect(transaction)
        .to.emit(splitExpenses, "SplitInitiated")
        .withArgs(initiator.address, amountOwed);
    });

    it("Has the correct allowance for the depositor2", async () => {
      const result = await token.allowance(
        deployer.address,
        depositor1.address
      );
      expect(result).to.equal(amountOwed);
    });

    it("Has the correct allowance for the depositor2", async () => {
      const result = await token.allowance(
        deployer.address,
        depositor2.address
      );
      expect(result).to.equal(amountOwed);
    });

    it("Has the correct allowance for the depositor3", async () => {
      const result = await token.allowance(
        deployer.address,
        depositor3.address
      );
      expect(result).to.equal(amountOwed);
    });

    it("Has the correct allowance for the initiator", async () => {
      const result = await token.allowance(deployer.address, initiator.address);
      expect(result).to.equal(amountOwed);
    });

    it("Has the correct allowance for the contract", async () => {
      const result = await token.allowance(
        deployer.address,
        splitExpenses.address
      );
      expect(result).to.equal(amountOwed);
    });
  });

  describe("Splitting", () => {
    beforeEach("Create a new group", async () => {
      let transaction = await splitExpenses
        .connect(initiator)
        .initiateSplit(
          "group1",
          amountOwed,
          [
            initiator.address,
            depositor1.address,
            depositor2.address,
            depositor3.address,
          ],
          [tokens(2), tokens(3), tokens(4), tokens(1)]
        );

      await transaction.wait();

      await expect(transaction)
        .to.emit(splitExpenses, "SplitInitiated")
        .withArgs(initiator.address, amountOwed);
    });

    it("Allows depositor1 to add their share of the split", async () => {
      let transaction = await splitExpenses
        .connect(depositor1)
        .contribute("group1");
      await transaction.wait();

      await expect(transaction)
        .to.emit(splitExpenses, "DepositReceived")
        .withArgs(depositor1.address, tokens(3));
    });

    it("Allows depositor2 to add their share of the split", async () => {
      let transaction = await splitExpenses
        .connect(depositor2)
        .contribute("group1");
      await transaction.wait();

      await expect(transaction)
        .to.emit(splitExpenses, "DepositReceived")
        .withArgs(depositor2.address, tokens(4));
    });

    it("Allows depositor3 to add their share of the split", async () => {
      let transaction = await splitExpenses
        .connect(depositor3)
        .contribute("group1");
      await transaction.wait();

      await expect(transaction)
        .to.emit(splitExpenses, "DepositReceived")
        .withArgs(depositor3.address, tokens(1));
    });

    it("Initiator collects all of its funds", async () => {
      let transaction = await splitExpenses
        .connect(depositor1)
        .contribute("group1");
      await transaction.wait();

      transaction = await splitExpenses
        .connect(depositor2)
        .contribute("group1");
      await transaction.wait();

      transaction = await splitExpenses
        .connect(depositor3)
        .contribute("group1");
      await transaction.wait();

      transaction = await splitExpenses
        .connect(initiator)
        .transferTotal("group1");
      await transaction.wait();

      await expect(transaction)
        .to.emit(splitExpenses, "SplitCompleted")
        .withArgs(initiator.address, amountOwed);
    });

    it("Depositor1 balance is drained", async () => {
      const result = await token.balanceOf(depositor1.address);
      expect(result).to.equal(0);
    });

    it("Depositor2 balance is drained", async () => {
      const result = await token.balanceOf(depositor2.address);
      expect(result).to.equal(0);
    });

    it("Depositor3 balance is drained", async () => {
      const result = await token.balanceOf(depositor3.address);
      expect(result).to.equal(0);
    });

    it("Initiator has all the tokens", async () => {
      let transaction = await splitExpenses
        .connect(depositor1)
        .contribute("group1");
      await transaction.wait();

      transaction = await splitExpenses
        .connect(depositor2)
        .contribute("group1");
      await transaction.wait();

      transaction = await splitExpenses
        .connect(depositor3)
        .contribute("group1");
      await transaction.wait();

      transaction = await splitExpenses
        .connect(initiator)
        .transferTotal("group1");
      await transaction.wait();
      
      const result = await token.balanceOf(initiator.address);
      expect(result).to.equal(tokens(10));
    });
  });
});
