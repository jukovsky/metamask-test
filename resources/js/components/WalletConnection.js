import React from "react";

export default function WalletConnection(props) {
	const { walletConnectionHandle, buttonText } = props;
    return (
        <div className="flex relative">
            <button
                onClick={walletConnectionHandle}
                className="px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 "
            >
                {buttonText}
            </button>
        </div>
    );
}
