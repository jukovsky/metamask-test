// Make sure the DevToken contract is included by requireing it.
const DilBSC = artifacts.require("DilBSC");
const Ownable = artifacts.require("Ownable");

// THis is an async function, it will accept the Deployer account, the network, and eventual accounts.
module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(
        DilBSC,
        "DilBSC",
        "DBSC",
        18,
        "10000"
    );
    const dilBSC = await DilBSC.deployed();

    await deployer.deploy(Ownable);
};
