// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CRUD{
    struct employee{
        string name;
        address walletAddress;
    };

    // made a employee[] array with public visiblity having name of a employees
    employee[] public employees;
    // will count the total number of employees.
    uint256 public totalemployees;

    constructor(){
        // ++ this whenever new employee receives
        totalemployees = 0;
    }

    function create(string memory name, address walletAddress) public returns(uint256 totalemployees){
        // we have maintain employee dataype with memory because with each function execution its storage also resets.
        // and alsoo memory keyword uses less gas then calldata.
        employee memory = newEmployee(name, walletAddress);
        employees.push(newEmployee);
        totalemployees++;
        return totalemployees;
    }


}