import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./layout.css";
import Footer from "./footer";
import Login from "./login";

export default function Layout() {
    return (
        <div className="layout">
            <nav className="menu">top menu</nav>
            <section className="section">main page wrapper</section>
            <side className="side">extra information wrapper</side>
            <footer className="footer">
                <Footer />
            </footer>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </div>
    );
}
