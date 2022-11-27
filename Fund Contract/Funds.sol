// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract funds{
    
    event Transfer(
        address indexed to,
        uint amount
    );

    function sendEther(address payable to, uint amount) external payable{
        require(address(this).balance >= amount, "Insuffiecient Funds");
        
        to.transfer(amount);
        emit Transfer(to,amount);
    }
}