import React from "react";

export default function Info(props) {
    const { totalSupply, totalStakeholders, totalStaked } =
        props;

    return (
        <div className="flex flex-col lg:flex-row justify-between container mx-auto lg:py-4">
            <div className="flex-1 justify-center">
                <div className="block rounded-lg shadow-lg bg-white max-w-lg text-center p-4 m-4">
                    <div className="py-3 px-10 border-b border-gray-300">
                        Total supply
                    </div>
                    <div className="py-3 px-10 font-semibold text-blue-600">
                        {totalSupply} DBSC
                    </div>
                </div>
            </div>
            <div className="flex-1 justify-center">
                <div className="block rounded-lg shadow-lg bg-white max-w-lg text-center p-4 m-4">
                    <div className="py-3 px-10 border-b border-gray-300">
                        Total stakeholders
                    </div>
                    <div className="py-3 px-10 font-semibold text-blue-600">
                        {totalStakeholders}
                    </div>
                </div>
            </div>
            <div className="flex-1 justify-center">
                <div className="block rounded-lg shadow-lg bg-white max-w-lg text-center p-4 m-4">
                    <div className="py-3 px-10 border-b border-gray-300">
                        Tokens staked
                    </div>
                    <div className="py-3 px-10 font-semibold text-blue-600">
                        {totalStaked}
                    </div>
                </div>
            </div>
        </div>
    );
}
