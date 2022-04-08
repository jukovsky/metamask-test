import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function WalletConnection() {
    const defaultText = "Connect wallet";
    const [buttonText, setButtonText] = useState(defaultText);
    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState("");

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", accountChangedHandle);
            window.ethereum.on("chainChanged", accountChangedHandle);
        }
    }, []);

    useEffect(() => {
        if (account) {
            setButtonText(account + " - " + balance);
        }
    }, [account]);

    const accountsChanged = async (newAccount) => {
        try {
            const balance = await window.ethereum.request({
                method: "eth_getBalance",
                params: [newAccount.toString(), "latest"],
            });
            setBalance(ethers.utils.formatEther(balance));
        } catch (err) {
            console.error(err);
        }
        setAccount(newAccount);
    };

    const accountChangedHandle = async () => {
        if (window.ethereum) {
            const id = await window.ethereum.request({ method: "eth_chainId" });
            const chainId = parseInt(id, 16);
            if (chainId != 97) {
                alert("Choose another chain");
                setButtonText(defaultText);
                setAccount("");
                return;
            }
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
			await accountsChanged(accounts[0]);
            setAccount(accounts[0]);
        } else {
            alert("install metamask extension!!");
            setButtonText(defaultText);
        }
    };

    return (
        <div className="flex relative">
            <button
                onClick={accountChangedHandle}
                className="px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 "
            >
                {buttonText}
            </button>
        </div>
    );
}
