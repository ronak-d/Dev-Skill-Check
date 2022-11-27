// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

// IMP-> to run the file go to the scripts directory and $ npx hardhat run deploy.js
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  // Contract factory is created in {contracts}.json file by hardhat.
  const CRUD = await hre.ethers.getContractFactory("CRUD");
  // inside deploy constructor args has to passed with deploy() funcn;
  const crud = await CRUD.deploy();
  // now this crud function is fully deployed.
  await crud.deployed();

  // console.log(crud);

  console.log(
    `Crud contract timestamp ${unlockTime} deployed to ${crud.address}`
  );

    // ----------------------------------------- operations started.

  // Create an employee.
  const createEmployeeGiveArgs1 = await crud.create(1,"ron","0x24794203d1246ee2625860D74415356b5996AFf6")
  const createEmployeeGiveArgs2 = await crud.create(2,"sahil","0x24794203d1246ee2625860D74415356b5996AFf6")
  const createEmployeeGiveArgs3 = await crud.create(3,"praj","0x24794203d1246ee2625860D74415356b5996AFf6")

  // count of employees
  const countTotalEmployees = await crud.totalemployees();

  // array of [employees] where arr type is [employee]
  // const ShowEmployee = await crud.employees(0); // this is hardcoded so.. see just below.
  const ShowEmployee = await crud.employees(countTotalEmployees-1); // -> totalemployees will be 1 so 1-1 => 0 index employee present.

  // now to show the employees present in the array of employee[].
  // we need to see it thorugh index and we'll push them into new arr in js file.
  // because solidity does not provide the data to be shown from the array of employee[].
  // it may costs huge gas and can't persist data from the BLOCK of the blockchain.

  const viewemployee = await crud.read(1);

  const updateExistingEmployee = await crud.update(10)

  const deleteEmp = await crud.deleteEmployee("sahil");

  
  console.log(`1) Count of employee from totalemployees funcn. ${countTotalEmployees}`);
  console.log(`2) Struct(employee) shows the properties from [Employees public getter funcn]. ${ShowEmployee}`);
  console.log(`3) view employees and read function of crud contract ${viewemployee}`)
  console.log(`4) updated employee id ${updateExistingEmployee}`);
  console.log(`5) deleted employee ${deleteEmployee}`);
// MAKE SURE ALL THIS YOU ARE CALLING IS A FUNCTION AND YOU ARE PASSING THE ARGUMENTS IN THE FUNCTIONS.
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
