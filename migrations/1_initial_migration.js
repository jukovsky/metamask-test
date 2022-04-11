const DilBSC = artifacts.require("DilBSC");

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(
        DilBSC,
        "DilBSC",
        "DBSC",
        18,
        "50000000000000000000000"
    );
    const dilBSC = await DilBSC.deployed();
};
