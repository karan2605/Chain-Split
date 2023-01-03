// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract SplitExpenses is ReentrancyGuard {
    using SafeMath for uint256;
    using SafeERC20 for ERC20;

    address public deployer;

    mapping(string => Group) public groups;
    mapping(address => string[]) public userGroups;

    mapping(string => uint256) contractBalances;

    ERC20 public token;

    struct Group {
        // The ID of the group
        string id;
        // The addresses of the members of the group
        address[] members;
        // The total amount of expenses or bills for the group
        uint256 totalAmount;
        // The mapping of member addresses to their contribution amounts
        mapping(address => uint256) contributions;
        // The mapping of member addresses to whether they have approved the expenses or bills
        mapping(address => bool) approvals;
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Event when a split has been initiated
    event SplitInitiated(address initiator, uint256 total);

    // Event emitted when a depositer has sent tokens to the contract
    event DepositReceived(address sender, uint256 amount);

    // Event emitted when the split has been completed
    event SplitCompleted(address initiator, uint256 totalAmount);

    constructor(address _tokenAddress, address _deployer) {
        deployer = _deployer;
        token = ERC20(_tokenAddress);
    }

    function initiateSplit(
        string memory _name,
        uint256 _totalAmount,
        address payable[] memory _members,
        uint256[] memory _amounts
    ) external {
        require(_amounts[0] >= 0, "Initiator amount must be non-negative");
        uint256 depositorTotal;

        for (uint i = 0; i < _amounts.length; i++) {
            depositorTotal += _amounts[i];
            require(_amounts[i] >= 0, "Depositor amount must be non-negative");
        }

        require(
            depositorTotal == _totalAmount,
            "Split does not equal total amount owed."
        );

        // Create a new group structure and populate its fields
        groups[_name].id = _name;
        groups[_name].members = _members;
        groups[_name].totalAmount = _totalAmount;

        for (uint i = 0; i < _amounts.length; i++) {
            groups[_name].contributions[_members[i]] = _amounts[i];

            userGroups[_members[i]].push(_name);
        }


        // Transfer depositors tokens into contract
        token.transferFrom(deployer, address(this), _amounts[0]);
        contractBalances[_name] = _amounts[0];

        require(
            contractBalances[_name] == _amounts[0],
            "Initiators split not transferred"
        );

        emit SplitInitiated(_members[0], _totalAmount);
    }

    function contribute(string memory _name) external {
        // Check balance before TxN
        uint256 balanceBefore = contractBalances[_name];
        uint256 contribution = groups[_name].contributions[msg.sender];

        // Transfer depositors tokens into contract
        token.transferFrom(deployer, address(this), contribution);
        contractBalances[_name] += contribution;

        // Assert account balance equals total
        require(
            contractBalances[_name] == contribution + balanceBefore,
            "Funds not received from depositor"
        );

        // Emit an event indicating the depositor has sent money to the initiator through the contract
        emit DepositReceived(msg.sender, contribution);
    }

    function transferTotal(string memory _name) external {
        require(
            contractBalances[_name] ==
                groups[_name].totalAmount,
            "Funds are not ready to be collected yet"
        );
        // Check account is initiator
        require(
            msg.sender == groups[_name].members[0],
            "Caller is not split initiator"
        );

        // Transfer account balance to initiator
        token.transfer(msg.sender, contractBalances[_name]);

        contractBalances[_name] = 0;

        // Emit an event indicating the depositor has sent money to the initiator through the contract
        emit SplitCompleted(msg.sender, groups[_name].totalAmount);
    }

    function getMembers(string memory _name) external view returns (address[] memory) {
        return groups[_name].members;
    }

    function getTotal(string memory _name) external view returns(uint256) {
        return groups[_name].totalAmount;
    }

    function getUserGroups(address _account) external view returns(string[] memory) {
        return userGroups[_account];
    }

    function getAmount(string memory _name, address _account) external view returns(uint256) {
        return groups[_name].contributions[_account];
    }
}
