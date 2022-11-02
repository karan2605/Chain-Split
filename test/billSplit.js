const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("billSplit", () => {

    let billSplit
    let deployer
    
    beforeEach(async () => {
        // Setup accounts
        accounts = await ethers.getSigners()
        deployer = accounts[0]

        // Load Contracts
        billSplit = await ethers.getContractFactory("billSplit")
    })


});