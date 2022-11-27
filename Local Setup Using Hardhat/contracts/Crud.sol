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
            employees.push(newEmployee); //passing an employee details in the employees array.
            totalemployees++;
        return (totalemployees);
    }

    // READ
    // refer = > https://ethereum.stackexchange.com/questions/90245/how-do-i-loop-through-an-array-of-structs-typeerror-integer-constant-expected
    function read(uint id) public view returns(uint _id, string memory _name, address _walletAddress){

        for( uint i=0; i<totalemployees; i++){
            if(employees[i].id == id){
                return (employees[i].id, employees[i].name, employees[i].walletAddress);
            }
        }
    }

    // UPDATE
    // refer => https://stackoverflow.com/questions/54499116/how-do-you-compare-strings-in-solidity
    function update(string memory name, uint id) public returns(bool){

        for( uint i=0; i<totalemployees; i++){

            if(keccak256(abi.encodePacked(employees[i].name)) == keccak256(abi.encodePacked(name))) {
                employees[i].id = id;
                return true;
            }
        }
        return false;
    }

    // DELETE
    function deleteEmployee(string memory name) external returns(bool){
        require(totalemployees>0);
        for(uint i = 0; i < totalemployees; i++) {

            if(keccak256(abi.encodePacked(employees[i].name)) == keccak256(abi.encodePacked(name))) {
                employees[i] = employees[totalemployees-1];     // just replacing the order and we can also pop it from the array.
                delete employees[totalemployees-1];             // as we cannot delete from between.
                totalemployees--;
                employees.length-1;
                return true;
            }
        }
        return false;
    }




}