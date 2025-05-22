import React from "react";
import {Route, Routes,BrowserRouter} from "react-router-dom"

import Home from "./pages/home/home.js";
import Login from "./pages/login/login.js";

const Rotas = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route Component={ Home } path="/home" exact />
            <Route Component={ Login } path="/" />
        </Routes>
    </BrowserRouter>
    )
}

export default Rotas;