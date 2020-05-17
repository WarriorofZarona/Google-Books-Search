import React from "react";
import { Link, useLocation } from "react-router-dom";


function Navbar() {

    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-dark">
            <Link className="navbar-brand" to="/">Google Books</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={location.pathname === "/" ? "nav-item active" : location.pathname === "/search" ? "nav-item active" : "nav-item"}>
                        <Link className="nav-link" to="/search">Search <span class=" sr-only">(current)</span></Link>
                    </li>
                    <li className={location.pathname === "/saved" ? "nav-item active" : "nav-item"}>
                        <Link className="nav-link" to="/saved">Saved</Link>
                    </li>
                </ul>
            </div>
        </nav >
    )
};

export default Navbar;