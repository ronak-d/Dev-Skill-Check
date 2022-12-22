// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MultiSignerWallet{

    address[] public owners; // no. of owners who said yes to sign the contract =>0
    uint public threshold;   // no. of owners who said NO to sign the contract =>1

    constructor(address[] memory _owners, uint _threshold) {
        owners = _owners;
        threshold = _threshold;
    }

    function getOwnersAddress() external view returns (address[] memory _owners){
        return owners;
    }
}