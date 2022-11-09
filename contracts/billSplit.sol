// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract BillSplit is ReentrancyGuard {
    using SafeMath for uint256;

    uint256 totalAmount;
    address payable public initiator;
    address payable public depositor;
    address public deployer;
    address tokenAddress;
    uint256 initiatorAmt;
    uint256 depositorAmt;
    ERC20 public token;

    modifier OnlyInitiator {
        require(msg.sender == initiator, "Only initiator can begin split");
        _;
    }

    modifier OnlyDepositor {
        require(msg.sender == depositor, "Only the despositor can add their split amount");
        _;
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Event when a split has been initiated
    event SplitInitiated(address initiator, address depositor, uint256 total);

    // Event emitted when a depositer has sent tokens to the contract
    event DepositReceived(address sender, uint256 amount);

    // Event emitted when the split has been completed
    event SplitCompleted(address initiator, uint256 totalAmount);

    constructor (
        uint256 _totalAmount,
        address payable _initiator,
        address payable _depositor,
        address payable _deployer,
        address _tokenAddress
    ) {
        totalAmount = _totalAmount;
        initiator = _initiator;
        depositor = _depositor;
        deployer = _deployer;
        token = ERC20(_tokenAddress);
        tokenAddress = _tokenAddress;
    }

    function initiateSplit(uint256 _initiatorAmt, uint256 _depositorAmt) external OnlyInitiator {
        initiatorAmt = _initiatorAmt;
        depositorAmt = _depositorAmt;
        require(_initiatorAmt >= 0, "Initiator amount must be non-negative");

        require(_depositorAmt >= 0, "Depositor amount must be non-negative");
        require(_initiatorAmt + _depositorAmt == totalAmount, "Split does not equal total amount owed.");
    
        // Transfer depositors tokens into contract
        token.transferFrom(deployer, address(this), initiatorAmt);

        require(token.balanceOf(address(this)) == initiatorAmt, "Initiators split not transferred");

        emit SplitInitiated(initiator, depositor, totalAmount);
    }

    function split() external OnlyDepositor {

        // Transfer depositors tokens into contract
        token.transferFrom(deployer, address(this), depositorAmt);
        
        // Assert account balance equals total
        uint256 balance = token.balanceOf(address(this));
        require(balance == totalAmount, "Funds not received from depositor");

        // Emit an event indicating the depositor has sent money to the initiator through the contract
        emit DepositReceived(depositor, depositorAmt);
    }

    function transferTotal() external OnlyInitiator {

        // Transfer account balance to initiator
        token.transfer(initiator, token.balanceOf(address(this)));

        // Emit an event indicating the depositor has sent money to the initiator through the contract
        emit SplitCompleted(initiator, totalAmount);
    }
}