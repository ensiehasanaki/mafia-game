import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
    return (
        <div className="container-menu">
            <div className="topnav">
                <Link to="/play">play ground</Link>
                <Link to="/player">players list</Link>
                <Link to="/team">your team</Link>
                <div className="topnav-right">
                    <Link to="/log-out">log out</Link>
                </div>
            </div>
        </div>
    );
}
