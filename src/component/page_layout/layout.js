import React from "react";
import { Route, Routes } from "react-router-dom";
import "./layout.css";
import Footer from "./footer/footer";
import Menu from "./menu/menu";
import PlayerList from "./menu/menu_component/playerList";
import MainWrapper from "./mainWrapper";

export default function Layout() {
    return (
        <div className="layout">
            <nav className="menu">
                <Menu />
            </nav>

            <div className="middel">
                <section className="section">
                    <Routes>
                        <Route index element={<MainWrapper />} />
                        <Route path="/player" element={<PlayerList />} />
                    </Routes>
                </section>
                <aside className="side">extra information wrapper</aside>
            </div>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}
