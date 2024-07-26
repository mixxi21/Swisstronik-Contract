require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x78a3925275302ffb6d17b20b43e542e53f7848ae17849de015fe93b83d3f4b04"],
    },
  },
};