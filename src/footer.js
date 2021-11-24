import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./footer.css";
import Setting from "./Setting";
import Policices from "./Policices";
import Faq from "./FAQ";
import Contact from "./contact";

export default function Footer() {
    return (
        <Router>
            <div>
                <footer className="style-footer">
                    <div>
                        <p>all right recieved by Aergia team</p>
                    </div>
                    <div>
                        <Link className="link" to="/settings">
                            settings
                        </Link>
                        <span> | </span>
                        <Link className="link" to="/policices">
                            policices
                        </Link>
                        <span> | </span>
                        <Link className="link" to="/FAQ">
                            FAQ
                        </Link>
                        <span> | </span>
                        <Link className="link" to="/contact">
                            contact us
                        </Link>
                    </div>
                </footer>

                <Routes>
                    <Route path="/sttings" element={<Setting />} />
                    <Route path="/policices" element={<Policices />} />
                    <Route path="/FAQ" element={<Faq />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}
