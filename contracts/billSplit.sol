// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./Token.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract billSplit {
    using SafeMath for uint256;

    uint256 totalAmount;
    address payable public initiator;
    address payable public depositor;
    uint256 initiatorAmt;
    uint256 depositorAmt;
    string method;
    Token public token;

    modifier OnlyInitiator {
        require(msg.sender == initiator, "Only initiator can begin split");
        _;
    }

    function compare(string memory a, string memory b) internal pure returns (bool) {
        if(bytes(a).length != bytes(b).length) {
            return false;
        } else {
            return keccak256(bytes(a)) == keccak256(bytes(b));
        }
    }

    constructor() {
        
    }
}
