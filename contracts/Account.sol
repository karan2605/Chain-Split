// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Account {
    mapping (address => string) private dataHash; // maps public key to IPFS CID's

    function setHash(string memory _ipfsHash) public {
        dataHash[msg.sender] = _ipfsHash;
    }

     function getHash() public view returns (string memory) {
        return dataHash[msg.sender];
    }
}