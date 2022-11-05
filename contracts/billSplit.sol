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

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

    // Event emitted when a user has sent tokens to a initiator
    event DepositReceived(address sender, uint256 amount, uint256 time);

    constructor (
        uint256 _totalAmount,
        address payable _initiator,
        address payable _depositor,
        string memory _method
    ) {
        totalAmount = _totalAmount;
        initiator = _initiator;
        depositor = _depositor;
        method = _method;
    }
}
