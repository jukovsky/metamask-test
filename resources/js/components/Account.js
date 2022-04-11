import React, { useState } from "react";

export default function Account(props) {
    const { account, staked, balance, stakeHandle, unstakeHandle } = props;
    const [stakeAmount, setStakeAmount] = useState("");
    const [unstakeAmount, setUnstakeAmount] = useState("");

    const handleStakeClick = () => {
        stakeHandle(stakeAmount);
    };

    const handleUnstakeClick = () => {
        unstakeHandle(unstakeAmount);
    };

    return (
        <div className="flex flex-col lg:flex-row justify-between container mx-auto lg:py-4">
            <div className="flex-1 justify-center">
                <div className="block rounded-lg shadow-lg bg-blue-600 max-w-lg text-center p-4 m-4">
                    <div className="py-3 px-10 border-b text-white">
                        {account.toString().slice(0, 4) +
                            "..." +
                            account.toString().slice(-4)}
                    </div>
                    <div className="py-3 px-10 font-semibold text-white">
                        {balance} DBSC ({staked} staked)
                    </div>
                </div>
            </div>
            <div className="flex-1 justify-center">
                <div className="block rounded-lg shadow-lg bg-white max-w-lg text-center p-4 m-4">
                    <div className="py-3 px-2 border-b border-gray-300">
                        <input
                            value={stakeAmount}
                            onChange={(e) => {
                                setStakeAmount(e.target.value);
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
                            id="stakeAmount"
                            placeholder="amount"
                        />
                    </div>
                    <div className="py-3 px-2">
                        <button
                            onClick={handleStakeClick}
                            type="button"
                            className="px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 "
                        >
                            Stake
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1 justify-center">
                <div className="block rounded-lg shadow-lg bg-white max-w-lg text-center p-4 m-4">
                    <div className="py-3 px-2 border-b border-gray-300">
                        <input
                            value={unstakeAmount}
                            onChange={(e) => {
                                setUnstakeAmount(e.target.value);
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
                            id="unstakeAmount"
                            placeholder="amount"
                        />
                    </div>
                    <div className="py-3 px-10">
                        <button
                            onClick={handleUnstakeClick}
                            type="button"
                            className="px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 "
                        >
                            Unstake
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
