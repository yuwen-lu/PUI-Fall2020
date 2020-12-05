import React from 'react';
import { Link } from 'react-router-dom';

// Functional Component for header, displayed on most all pages

export default function Header() {
    return (
        <React.Fragment>
            <nav style={navStyle}>
                <Link style={navLinkStyle} to="/">Home</Link>
                <Link style={navLinkStyle} to="/projects">Projects</Link>
                <Link style={navLinkStyle} to="/life">Life</Link>
                <Link style={navLinkStyle} to="/resume">Resume</Link>
            </nav>
        </React.Fragment>
    )
}

const navStyle = {
    display: "flex",
    height: "10vh",
    padding: "5vw",
    alignItems: "center",
    justifyContent: "flex-end",
}

const navLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    border: "none",
    margin: "2rem"
}