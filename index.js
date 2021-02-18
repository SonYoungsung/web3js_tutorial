const { default: Web3 } = require("web3");

let web3 = new Web3(Web3.givenProvier || "ws:localhost:8545")