import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import '../App.css';
import ProfilePic from '../resources/images/personal-profile.jpg';

// Functional Component for homepage

export default function Home() {
    // the animate on scroll library to animate items on home page
    AOS.init();

    return (
        <React.Fragment>
            <Header />
            <div className="content-wrapper">
                <section 
                    id="introduction" 
                    style={sectionStyle} 
                    data-aos="fade-in" 
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <div className="text-column" style={introductionStyle}>
                        <p className="title">Hi there! I'm Yuwen.</p>
                        <p>I am a <a target="_blank" href={"https://www.hcii.cmu.edu/academics/mhci"}>Master of Human-Computer Interaction</a> student at Carnegie Mellon University, School of Computer Science.</p>
                        <p>I'm an aspired Social Media researcher and UX practitioner.</p>
                        <p>Jump to my <Link to="/resume">Resume</Link>.</p>
                    </div>
                    <div className="profile-pic-container" style={profilePicContainerStyle}>
                        <img className="profile-pic" style={profilePicStyle} src={ProfilePic} alt="Me"></img>
                    </div>
                </section>
                <section 
                    id="experience" 
                    style={sectionStyle} 
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <div id="skill-cloud" style={iconCloudStyle}>
                        Hello
                    </div>
                    <div className="text-column" style={experienceTextStyle}>
                        <p>
                        Previously, I worked with Professor <a href={"https://www.ics.uci.edu/~gmark/Home_page/Welcome.html"}>Gloria Mark</a> at the University of California, Irvine and <a href={"https://acw.io/"}>Alex Williams</a> at the University of Tennessee, Knoxville as undergraduate research assistant.
                        </p>
                    </div>
                </section>
                <section 
                    id="interest" 
                    style={sectionStyle} 
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <div className="text-column" style={experienceTextStyle}>
                        My research interest is broadly in <strong>Social Computing</strong>. I seize to use mixed method research to <strong>understand people’s behavior</strong> at scale on social media platforms, and use UX design principles and programming to <strong>improve existing platforms</strong> and promote pro-social outcomes.
                    </div>
                    <div id="social-media-icon-cloud" style={iconCloudStyle}>Social Media Icons</div>
                </section>
            </div>
            <Footer />
        </React.Fragment>
    )
}

const sectionStyle = {
    display: "flex",
    justifyContent: "space-evenly",

}

const introductionStyle = {
    width: "50%",
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

const experienceTextStyle = {
    width: "45%",
}

const iconCloudStyle = {
    width: "45%",
}