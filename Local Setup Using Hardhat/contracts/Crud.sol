// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CRUD {
    struct employee{
        uint id;
        string name;
        address walletAddress;
    }

    // made a employee[] array with public visiblity having name of a employees
    employee[] public employees;
    // will count the total number of employees.
    uint256 public totalemployees;

    constructor(){
        // ++ this whenever new employee receives
        totalemployees = 0;
    }

    // Users can be able to Add the employee -> CREATE
    function create(uint id, string memory name, address walletAddress) public returns(uint256 _totalemployees){
        // we have maintain employee dataype with memory because with each function execution its storage also resets.
        // and also memory keyword uses less gas then calldata.

        employee memory newEmployee = employee(id, name, walletAddress);
            employees.push(newEmployee);
            totalemployees++;
        return (totalemployees);
    }

    // READ the data
    function read(uint id) public returns(uint _id, string memory name, address walletAddress){

        

    }




}