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

  const CRUD = await hre.ethers.getContractFactory("CRUD");
  // inside deploy constructor args has to passed with deploy() funcn;
  const crud = await CRUD.deploy();
  // now this crud function is fully deployed.
  await crud.deployed();

  console.log(crud);

  console.log(
    `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${crud.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
