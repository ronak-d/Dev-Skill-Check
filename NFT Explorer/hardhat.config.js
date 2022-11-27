require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/zoZR88ybkJbA8DtyfxId-VJQlrJm2D6U`,
      accounts: ["0b3daa643e7f22c49a14ae179b90dc9a18132a169af3a8a47a0db11e45792f30"],
    }
  }
};
// account 1 goerli