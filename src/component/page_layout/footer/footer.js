import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
    return (
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
        </div>
    );
}
