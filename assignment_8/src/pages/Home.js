import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import '../App.css';
import ProfilePic from '../resources/images/personal-profile.jpg';

// Functional Component for homepage

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <div className="content-wrapper">
                <section style={introductionSectionStyle}>
                    <div className="text-column" style={introductionStyle}>
                        <p className="title">Hi there! I'm Yuwen.</p>
                        <p>I am a <a href={"https://www.hcii.cmu.edu/academics/mhci"}>Master of Human-Computer Interaction</a> student at Carnegie Mellon University, School of Computer Science.</p>
                        <p>I'm an aspired Social Media researcher and UX practitioner.</p>
                        <p>Jump to my <Link to="/resume">Resume</Link>.</p>
                    </div>
                    <div className="profile-pic-container" style={profilePicContainerStyle}>
                        <img className="profile-pic" style={profilePicStyle} src={ProfilePic} alt="Me"></img>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}

const introductionSectionStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "10vh",

}

const introductionStyle = {
    width: "55%",
    textAlign: "right",
    fontSize: "1.3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
}

const profilePicContainerStyle = {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "2rem"
}

const profilePicStyle = {
    borderRadius: "100%",
    display: "block",
    width: "22vw",
    margin: "auto"
}
