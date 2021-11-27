import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Layout from "./layout";
import Setting from "./Setting";
import Policices from "./Policices";
import Faq from "./FAQ";
import Contact from "./contact";
import Login from "./login.js";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/policices" element={<Policices />} />
            <Route path="/FAQ" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
