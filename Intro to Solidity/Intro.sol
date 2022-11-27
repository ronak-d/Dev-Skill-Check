// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

// Create a smart contract which
// Can take the name, and age while deploying the smart contract
// A function that when called returns a name ;
// A function that will only be accessible outside the smart contract and can return your age*2
// Deploy your smart contract with Remix and test it

contract IntroToSol{

    uint age;
    string public name; // getter function makes itself using public.

    constructor(string memory paramName, uint paramAge){
        name = paramName;
        age = paramAge;
    }

    /* 
    function CallName() public view returns(string memory callname){
        callname = name;
        return callname;
    } 
    */
    function returnAge() external view returns(uint newage){
        return age*2;
    }
}