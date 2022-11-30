// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const DragonBallZ = await hre.ethers.getContractFactory("DragonBallZ1155");
  const token = await DragonBallZ.deploy("DragonBallZ1155","DBZ");

  await token.deployed();

  console.log(`Deployed to ${token.address}`);
  const nft = await token.mint(10,"https://ipfs.io/ipfs/QmUQFQF4xAF5A8sj9MqwkNnS6gQVer4F23c522F3YfwFPQ");
  console.log(nft);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

