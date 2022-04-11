import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <div className="flex relative lg:pr-20 font-semibold">
                DiletantBSC
            </div>
            <div className="flex-grow pr-2 relative">
                <ul className="flex">
                    <li className="nav-item">
                        <Link
                            className="pl-2 text-gray-500 hover:text-gray-800 focus:text-gray-800"
                            to="/"
                        >
                            Main
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="pl-2 text-gray-500 hover:text-gray-800 focus:text-gray-800"
                            to="/about"
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
