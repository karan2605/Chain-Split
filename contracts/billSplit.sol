// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./Token.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract BillSplit {
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

    function initiateSplit(uint256 _initiatorAmt, uint256 _depositorAmt) external OnlyInitiator {
        initiatorAmt = _initiatorAmt;
        depositorAmt = _depositorAmt;
        require(_initiatorAmt >= 0, "Initiator amount must be non-negative");
        require(_initiatorAmt >= 0, "Initiator amount must be non-negative");

        if(compare(method, "int")) {
            require(_depositorAmt >= 0, "Depositor amount must be non-negative");
            require(_initiatorAmt + _depositorAmt == totalAmount, "Split does not equal total amount owed.");
        }
        else if(compare(method, "proportion")) {
            require(_initiatorAmt <= 100, "Initiator percentage must be less than 100");
            require(_depositorAmt <= 100, "Depositor percentage must be less than 100");
            require(_initiatorAmt + _depositorAmt == 100, "Split proportion does not equal 100%");
        }
    }

    function split() external payable {
        if(compare(method, "int") && msg.sender == depositor) {
            // Transfer depositors tokens into contract
            token.transferFrom(msg.sender, address(this), depositorAmt);
        }
        else if(compare(method, "proportion") && msg.sender == depositor) {
            // Transfer depositors tokens into contract
            token.transferFrom(msg.sender, address(this), totalAmount*(depositorAmt/100));
        }

        // Assert account balance equals total-initiatorAmt
        uint256 balance = token.balanceOf(address(this));
        require(balance == depositorAmt, "Funds not received from depositor");

        // Transfer account balance to initiator
        token.transfer(initiator, balance);

        // Emit an event indicating the depositor has sent money to the initiator through the contract
        emit DepositReceived(depositor, depositorAmt, block.timestamp);
    }
}
