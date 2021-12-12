import React from "react";
import { Outlet } from "react-router-dom";
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
                <section className="section">
                    <Outlet />
                </section>
                <aside className="side">
                    <p>extra information wrapper</p>
                </aside>
            </div>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}
