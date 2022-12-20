const { expect } = require("chai");
const { use, expectRevert } = require("@openzeppelin/test-helpers");
const { solidity } = require("hardhat");
const { deployContract, getWallets } = require("hardhat/web3");

use(solidity);

describe("SplitExpenses", () => {
  let wallets;
  let splitExpenses;

  beforeEach(async () => {
    wallets = await getWallets();
    splitExpenses = await deployContract("SplitExpenses", { from: wallets[0] });
  });

  it("should allow users to contribute to the contract", async () => {
    await splitExpenses.contribute(100, "group1", { from: wallets[1] });
    const balance = await splitExpenses.balances(wallets[1]);
    expect(balance).to.be.bignumber.equal("100");
  });

  it("should split the expenses between the contributors", async () => {
    await splitExpenses.contribute(100, "group1", { from: wallets[2] });
    await splitExpenses.contribute(100, "group1", { from: wallets[3] });
    await splitExpenses.splitExpenses("group1");
    const balance1 = await splitExpenses.balances(wallets[1]);
    const balance2 = await splitExpenses.balances(wallets[2]);
    const balance3 = await splitExpenses.balances(wallets[3]);
    expect(balance1).to.be.bignumber.equal("0");
    expect(balance2).to.be.bignumber.equal("0");
    expect(balance3).to.be.bignumber.equal("0");
  });

  it("should revert if the group does not exist", async () => {
    await expectRevert(
      splitExpenses.splitExpenses("group2"),
      "Group does not exist"
    );
  });

  it("should revert if the caller is not a member of the group", async () => {
    await expectRevert(
      splitExpenses.splitExpenses("group1", { from: wallets[4] }),
      "You are not a member of this group"
    );
  });
});
