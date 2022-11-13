// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract BillSplit is ReentrancyGuard {
    using SafeMath for uint256;

    uint256 private totalAmount;
    address payable public initiator;
    address payable[] public depositors;
    mapping (address => uint) public depositorOwes;
    mapping (address => bool) private depositorExists;
    address public deployer;
    address private tokenAddress;
    uint256 private initiatorAmt;
    uint256 private depositorAmt;
    ERC20 public token;

    modifier OnlyInitiator {
        require(msg.sender == initiator, "Only initiator can begin split");
        _;
    }

    modifier OnlyDepositor(address _caller) {
        require(depositorExists[_caller], "Only the depositor can add their split amount");
        _;
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Event when a split has been initiated
    event SplitInitiated(address initiator, uint256 total);

    // Event emitted when a depositer has sent tokens to the contract
    event DepositReceived(address sender, uint256 amount);

    // Event emitted when the split has been completed
    event SplitCompleted(address initiator, uint256 totalAmount);

    constructor (
        uint256 _totalAmount,
        address payable _initiator,
        address payable[] memory _depositors,
        address payable _deployer,
        address _tokenAddress
    ) {
        totalAmount = _totalAmount;
        initiator = _initiator;
        depositors = _depositors;

        for(uint i = 0; i < _depositors.length; i++) {
            depositorOwes[_depositors[i]] = 0;
            depositorExists[_depositors[i]] = true;
        }

        deployer = _deployer;
        token = ERC20(_tokenAddress);
        tokenAddress = _tokenAddress;
    }

    function initiateSplit(uint256 _initiatorAmt, uint256[] memory _depositorAmts) external OnlyInitiator {
        uint256 depositorTotal = 0;

        initiatorAmt = _initiatorAmt;
        require(_initiatorAmt >= 0, "Initiator amount must be non-negative");

        // Calculates the total amount that must be given by all depositors
        for(uint i = 0; i < _depositorAmts.length; i++) {
            depositorTotal += _depositorAmts[i];
            require(_depositorAmts[i] >= 0, "Depositor amount must be non-negative");
            depositorOwes[depositors[i]] = _depositorAmts[i];
        }

        require(_initiatorAmt + depositorTotal == totalAmount, "Split does not equal total amount owed.");
    
        // Transfer depositors tokens into contract
        token.transferFrom(deployer, address(this), initiatorAmt);
        require(token.balanceOf(address(this)) == initiatorAmt, "Initiators split not transferred");
        emit SplitInitiated(initiator, totalAmount);
    }

    function split() external OnlyDepositor(msg.sender) {

        // Check balance before TxN
        uint256 balanceBefore = token.balanceOf(address(this));

        // Transfer depositors tokens into contract
        token.transferFrom(deployer, address(this), depositorOwes[msg.sender]);
        
        // Assert account balance equals total
        uint256 balance = token.balanceOf(address(this));
        require(balance == depositorOwes[msg.sender] + balanceBefore, "Funds not received from depositor");

        // Emit an event indicating the depositor has sent money to the initiator through the contract
        emit DepositReceived(msg.sender, depositorOwes[msg.sender]);
    }

    function transferTotal() external OnlyInitiator {

        // Transfer account balance to initiator
        token.transfer(initiator, token.balanceOf(address(this)));

        // Emit an event indicating the depositor has sent money to the initiator through the contract
        emit SplitCompleted(initiator, totalAmount);
    }
}