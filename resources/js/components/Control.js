import React, { useState } from "react";

export default function Control(props) {
    const { mintHandle, burnHandle, transferHandle } = props;
    const [mintAmount, setMintAmount] = useState("");
    const [burnAmount, setBurnAmount] = useState("");
    const [transferAmount, setTransferAmount] = useState("");
    const [transferAddress, setTransferAddress] = useState("");

    const handleMintClick = () => {
        mintHandle(mintAmount);
    };

    const handleBurnClick = () => {
        burnHandle(burnAmount);
    };

    const handleTransferClick = () => {
        transferHandle(transferAddress, transferAmount);
    };

    return (
        <div className="flex flex-col lg:flex-row justify-between container mx-auto lg:py-4">
            <div className="flex-1 justify-center">
                <div className="block rounded-lg shadow-lg bg-white max-w-lg text-center p-4 m-4">
                    <div className="py-3 px-2 border-b border-gray-300">
                        <input
                            value={mintAmount}
                            onChange={(e) => {
                                setMintAmount(e.target.value);
                            }}
                            className="form-control block
										px-3
										py-1.5
										text-gray-700
										bg-white bg-clip-padding
										border border-solid border-gray-300
										rounded
										m-0
										focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="mintAmount"
                            placeholder="amount"
                        />
                    </div>
                    <div className="py-3 px-2">
                        <button
                            onClick={handleMintClick}
                            type="button"
                            className="px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 "
                        >
                            Mint
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1 justify-center">
                <div className="block rounded-lg shadow-lg bg-white max-w-lg text-center p-4 m-4">
                    <div className="py-3 px-2 border-b border-gray-300">
                        <input
                            value={burnAmount}
                            onChange={(e) => {
                                setBurnAmount(e.target.value);
                            }}
                            className="form-control block
										px-3
										py-1.5
										text-gray-700
										bg-white bg-clip-padding
										border border-solid border-gray-300
										rounded
										m-0
										focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="burnAmount"
                            placeholder="amount"
                        />
                    </div>
                    <div className="py-3 px-10">
                        <button
                            onClick={handleBurnClick}
                            type="button"
                            className="px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 "
                        >
                            Burn
                        </button>
                    </div>
                </div>
            </div>
            <div className="justify-center">
                <div className="block rounded-lg shadow-lg bg-white max-w-lg text-center p-4 m-4">
                    <div className="py-3 px-2 border-b border-gray-300">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-group">
                                <input
                                    value={transferAddress}
                                    onChange={(e) => {
                                        setTransferAddress(e.target.value);
                                    }}
                                    className="form-control block
										px-3
										py-1.5
										text-gray-700
										bg-white bg-clip-padding
										border border-solid border-gray-300
										rounded
										m-0
										focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="transferAddress"
                                    placeholder="address"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    value={transferAmount}
                                    onChange={(e) => {
                                        setTransferAmount(e.target.value);
                                    }}
                                    className="form-control block
										px-3
										py-1.5
										text-gray-700
										bg-white bg-clip-padding
										border border-solid border-gray-300
										rounded
										m-0
										focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="transferAmount"
                                    placeholder="amount"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="py-3 px-2">
                        <button
                            onClick={handleTransferClick}
                            type="button"
                            className="px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 "
                        >
                            Transfer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
