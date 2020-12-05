import React from 'react';
import { Link } from 'react-router-dom';


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
    color: "#000",
    textDecoration: "none",
    border: "none",
    margin: "2rem"
}