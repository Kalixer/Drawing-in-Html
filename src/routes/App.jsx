import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../components/Home";

import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

import "../../styles/global.css"

const App = () => {
    const initialState = useInitialState()

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={ <Home/> }/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;