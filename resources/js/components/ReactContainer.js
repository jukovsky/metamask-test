import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function ReactContainer() {
    return (
        <>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </>
    );
}

if (document.getElementById("react-container")) {
    ReactDOM.render(
        <ReactContainer />,
        document.getElementById("react-container")
    );
}
