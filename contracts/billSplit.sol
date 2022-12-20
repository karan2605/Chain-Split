// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract SplitExpenses {
    // mapping of address to their balance in the contract
    mapping(address => uint) public balances;

    // mapping of address to their total contribution to the contract
    mapping(address => uint) public contributions;

    // mapping of group ID to a list of addresses that belong to the group
    mapping(bytes32 => address[]) public groups;

    // mapping of group ID to a list of intended contributions for each member of the group
    mapping(bytes32 => uint[]) public intendedContributions;

    // event for when a contribution is made
    event Contribution(address sender, uint amount, bytes32 group);

    // owner of the contract
    address public owner;

    // boolean flag to indicate if the contract is stopped
    bool public stopped;

    // constructor to set the owner of the contract
    constructor() {
        owner = msg.sender;
    }

    // modifier to restrict a function to the contract owner
    modifier onlyOwner {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    // function to contribute money to the contract
    function contribute(uint amount, bytes32 group) public {
        // check if the contract is stopped
        require(!stopped, "The contract is stopped");

        // check if the group exists
        require(groups[group].length > 0, "Group does not exist");

        // update the contribution and balance of the sender
        contributions[msg.sender] += amount;
        balances[msg.sender] += amount;

        // add the sender to the group
        groups[group].push(msg.sender);

        // add the contribution to the list of intended contributions for the group
        intendedContributions[group].push(amount);

        // emit the Contribution event
        emit Contribution(msg.sender, amount, group);
    }

    // function to split the expenses between the contributors in a group
    function splitExpenses(bytes32 group) public {
        // check if the contract is stopped
        require(!stopped, "The contract is stopped");

        // check if the group exists
        require(groups[group].length > 0, "Group does not exist");

        // check if the caller is a member of the group
        require(isMember(msg.sender, group), "You are not a member of this group");

        // iterate over the contributors in the group and update their balance based on their intended contribution
        for (uint i = 0; i < groups[group].length; i++) {
            address contributor = groups[group][i];
            uint contribution = intendedContributions[group][i];
            balances[contributor] -= contribution;
        }
    }

    // function to create a new group
    function createGroup(bytes32 group) public {
        // check if the contract is stopped
        require(!stopped, "The contract is stopped");

        // check if the group already exists
        require(groups[group].length == 0, "Group already exists");

        // create the group
        groups[group].push(msg.sender);
    }

    // function to withdraw the balance of the caller
    function withdraw() public {
        // check if the contract is stopped
        require(!stopped, "The contract is stopped");
        // send the balance of the caller to their address
        payable(msg.sender).transfer(balances[msg.sender]);

        // reset the balance of the caller to zero
        balances[msg.sender] = 0;
    }

    // function to stop the contract
    function emergencyStop() onlyOwner public {
        // set the stopped flag to true
        stopped = true;
    }

    // function to check if an address is a member of a group
    function isMember(address user, bytes32 group) public view returns (bool) {
        // iterate over the members of the group and check if the user is a member
        for (uint i = 0; i < groups[group].length; i++) {
            if (groups[group][i] == user) {
                return true;
            }
        }
        return false;
    }
}
