// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

// to run the file go to the scripts directory and $ npx hardhat run deploy.js
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

  const createEmployeeGiveArgs = await crud.create("ron","0x24794203d1246ee2625860D74415356b5996AFf6")

  const countTotalEmployees = await crud.totalepmployees;

  const ShowEmployee = await crud.employees(0);

  console.log(countTotalEmployees);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
