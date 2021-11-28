import React from "react";
import "./layout.css";
import Footer from "./footer/footer";
import Menu from "./menu/menu";

export default function Layout() {
    return (
        <div className="layout">
            <nav className="menu">
                <Menu />
            </nav>
            <div className="middel">
                <section className="section">main page wrapper</section>
                <side className="side">extra information wrapper</side>
            </div>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}
