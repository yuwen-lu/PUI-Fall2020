import React from 'react';
import { Route, Link } from 'react-router-dom';
import EmailIcon from '../resources/icons/email.svg';
import GithubIcon from '../resources/icons/github.svg';
import InstagramIcon from '../resources/icons/instagram.svg';
import LinkedinIcon from '../resources/icons/linkedin.svg';
import TwitterIcon from '../resources/icons/twitter.svg';


export default function Footer () {

    return (
        <div className="footerContainer" style={footerContainerStyle}>
            <p>Contact</p>
            <div className="footerIcons">
                <a target="_blank" href={"mailto:yuwenlu@andrew.cmu.edu"} style={iconLinkStyle}><img src={EmailIcon} style={iconStyle}></img></a>
                <a target="_blank" href={"https://twitter.com/yuwen_lu_"} style={iconLinkStyle}><img src={TwitterIcon} style={iconStyle}></img></a>
                <a target="_blank" href={"https://www.instagram.com/yuwen_lu_/"} style={iconLinkStyle}><img src={InstagramIcon} style={iconStyle}></img></a>
                <a target="_blank" href={"https://github.com/yuwen-lu/"} style={iconLinkStyle}><img src={GithubIcon} style={iconStyle}></img></a>
                <a target="_blank" href={"https://www.linkedin.com/in/yuwen-lu/"} style={iconLinkStyle}><img src={LinkedinIcon} style={iconStyle}></img></a>
            </div>
            <p style={footerBottomTextStyle}>Design and developed by Yuwen Lu with React.</p>
            <p style={footerBottomTextStyle}>Last updated: Dec 2020</p>
        </div>
    )

}

const footerContainerStyle = {
    textAlign: "center",
    marginTop: "10rem"
}

const iconStyle = {
    width: "1.8rem",
    margin: "1rem 1rem 3rem",
}

const iconLinkStyle = {
    border: "none"
}

const footerBottomTextStyle = {
    fontSize: "1rem",
    lineHeight: "1.5rem"
}