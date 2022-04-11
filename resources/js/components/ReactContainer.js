import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ethers } from "ethers";
import ReactDOM from "react-dom";

import Navigation from "./Navigation";
import WalletConnection from "./WalletConnection";
import Info from "./Info";
import Account from "./Account";
import Control from "./Control";

export default function ReactContainer() {
    const { ethereum } = window;
    const defaultText = "Connect wallet";
    const [buttonText, setButtonText] = useState(defaultText);
    const [account, setAccount] = useState(0);
    const [balance, setBalance] = useState(0);
    const [staked, setStaked] = useState(0);
    const [token, setToken] = useState(0);
    const [totalSupply, setTotalSupply] = useState(0);
    const [totalStakeholders, setTotalStakeholders] = useState(0);
    const [totalStaked, setTotalStaked] = useState(0);

    useEffect(() => {
        if (ethereum && ethereum.isMetaMask === true) {
            getContract()
                .then((contract) => {
                    const address = process.env.MIX_CONTRACT_ADDRESS;
                    const provider = new ethers.providers.Web3Provider(
                        ethereum
                    );
                    const signer = provider.getSigner();
                    const token = new ethers.Contract(
                        address,
                        contract.abi,
                        signer
                    );
                    setToken(token);
                })
                .catch((error) => {
                    throw new Error(error);
                });

            ethereum.on("chainChanged", walletConnectionHandle);
            ethereum.on("accountsChanged", walletConnectionHandle);
        }
    }, []);

    useEffect(() => {
        if (account) {
            token
                .balanceOf(account)
                .then((balance) => {
                    setBalance(ethers.utils.formatEther(balance));
                })
                .catch((error) => {
                    throw new Error(error);
                });
            token
                .hasStake(account)
                .then((staked) => {
                    setStaked(ethers.utils.formatEther(staked.total_amount));
                })
                .catch((error) => {
                    throw new Error(error);
                });
        }
    }, [account]);

    useEffect(() => {
        if (token) {
            getStats();
        }
    }, [token]);

    const getStats = () => {
        token
            .totalSupply()
            .then((totalSupply) =>
                setTotalSupply(ethers.utils.formatEther(totalSupply))
            )
            .catch((error) => {
                throw new Error(error);
            });
        token
            .totalStakeholders()
            .then((totalStakeholders) =>
                setTotalStakeholders(parseInt(totalStakeholders))
            )
            .catch((error) => {
                throw new Error(error);
            });
        token
            .totalStaked()
            .then((totalStaked) =>
                setTotalStaked(ethers.utils.formatEther(totalStaked))
            )
            .catch((error) => {
                throw new Error(error);
            });
    }

    const walletConnectionHandle = () => {
        if (ethereum && ethereum.isMetaMask === true) {
            ethereum
                .request({ method: "eth_chainId" })
                .then((id) => {
                    const chainId = parseInt(id, 16);
                    if (chainId != 1337) {
                        setButtonText(defaultText);
                        setAccount(0);
                        throw new Error("Choose another chain");
                    }
                })
                .then(() => {
                    ethereum
                        .request({
                            method: "eth_requestAccounts",
                        })
                        .then((accounts) => setAccount(accounts[0]))
                        .catch((error) => {
                            throw new Error(error);
                        });
                })
                .catch((error) => {
                    throw new Error(error);
                });
        } else {
            setButtonText(defaultText);
            throw new Error("Install metamask extension");
        }
    };

    const getContract = () => {
        return fetch("./DilBSC.json", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    throw new Error("Error fetching ABI");
                }
            })
            .catch((error) => {
                throw new Error(error);
            });
    }

	const mintHandle = (amount) => {
		token.mint(account, amount + "000000000000000000");
	}

	const burnHandle = (amount) => {
        token.burn(account, amount + "000000000000000000");
    };

	const transferHandle = (address, amount) => {
        token.transfer(address, amount + "000000000000000000");
    };

	const stakeHandle = (amount) => {
        token.stake(amount + "000000000000000000");
    };

	const unstakeHandle = (address, amount) => {
        token.transfer(address, amount + "000000000000000000");
    };

    return (
        <BrowserRouter>
            <header>
                <nav className="flex items-center justify-between p-4 shadow-md bg-white relative w-full">
                    <div className="flex container mx-auto">
                        <Navigation />
                        {!account && (
                            <WalletConnection
                                walletConnectionHandle={walletConnectionHandle}
                                buttonText={buttonText}
                            />
                        )}
                    </div>
                </nav>
            </header>
            {account != 0 && (
                <>
                    <Account
                        balance={balance}
                        staked={staked}
                        account={account}
                        stakeHandle={stakeHandle}
                        unstakeHandle={unstakeHandle}
                    />
                    <Control
                        mintHandle={mintHandle}
                        burnHandle={burnHandle}
                        transferHandle={transferHandle}
                    />
                </>
            )}
            <Info
                totalSupply={totalSupply}
                totalStakeholders={totalStakeholders}
                totalStaked={totalStaked}
            />
        </BrowserRouter>
    );
}

if (document.getElementById("react-container")) {
    ReactDOM.render(
        <ReactContainer />,
        document.getElementById("react-container")
    );
}
