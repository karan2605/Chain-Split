// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

async function main() {
  let accounts = await ethers.getSigners();
  let deployer;

  deployer = accounts[0]

  // Deploy ERC20
  const ERC20 = await ethers.getContractFactory("ERC20");
  const token = await ERC20.deploy("Ether", "ETH", tokens(1000000000000));
  await token.deployed();

  console.log(`Deployed ERC20 Contract at : ${token.address}`);

  const SplitExpenses = await ethers.getContractFactory("SplitExpenses");
  const splitExpenses = await SplitExpenses.deploy(token.address, deployer.address);
  await splitExpenses.deployed();

  console.log(`Deployed BillSplit Contract at : ${splitExpenses.address}`);

  const Account = await ethers.getContractFactory("Account");
  const account = await Account.deploy();
  await account.deployed();

  console.log(`Deployed Account Contract at : ${account.address}`);

  console.log(`Approving BillSplit contract from ERC20`);
  // Approve contract account

  let transaction = await token
    .connect(deployer)
    .approve(splitExpenses.address, 9999999999999);
  await transaction.wait();
  console.log(`BillSplit Approved`);

  console.log(`Approving Accounts`);
  for (let i = 1; i < accounts.length; i++) {
    transaction = await token
      .connect(deployer)
    .approve(accounts[i].address, 999999999999);
    await transaction.wait();
  }
  console.log(`Accounts Approved`);

  saveFrontendFiles(token, "ERC20");
  saveFrontendFiles(splitExpenses, "SplitExpenses");
  saveFrontendFiles(account, "Account");

  console.log(`Finished.`);
}

function saveFrontendFiles(contract, name) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../src/contractData";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: contract.address }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
