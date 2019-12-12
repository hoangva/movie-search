import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet'
import "../App.css";
import Header from "./Header";

const WrongName = () => {
    return (
        <>
            <Helmet>
                <title>Wrong Name</title>
            </Helmet>
            <div className="App">
                <Header text="Test Wrong Name" />
            </div>
        </>
    )
}

export default WrongName;