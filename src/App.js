import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/page_layout/layout";
import Login from "./component/page_login/login";
import Setting from "./component/page_layout/footer/footer_component/Setting";
import Policices from "./component/page_layout/footer/footer_component/Policices";
import Faq from "./component/page_layout/footer/footer_component/FAQ";
import Contact from "./component/page_layout/footer/footer_component/contact";
import PlayerList from "./component/page_layout/menu/menu_component/playerList";
import MainWrapper from "./component/page_layout/mainWrapper";

function App() {
    return (
        <BrowserRouter basename="mafia-game">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<MainWrapper />} />
                    <Route path="/player" element={<PlayerList />} />
                </Route>
                <Route path="/settings" element={<Setting />} />
                <Route path="/policices" element={<Policices />} />
                <Route path="/FAQ" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;