import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";

function App() {
    return (
        <div>
            <p> nc</p>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
