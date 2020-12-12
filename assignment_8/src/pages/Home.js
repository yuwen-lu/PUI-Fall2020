import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from 'react-particles-js';
import { Container, Row, Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import '../App.css';
import ProfilePic from '../resources/images/personal-profile.jpg';
import { isElementOfType } from 'react-dom/test-utils';

// Functional Component for homepage

export default function Home() {
    // the animate on scroll library to animate items on home page
    AOS.init();

    // responsiveness
    const isNotPhone = useMediaQuery({
        query: '(min-width: 576px)'
    });

    return (
        <React.Fragment>
            <Header />
            <Container>
                <Row 
                    id="introduction" 
                    style={rowStyle} 
                    data-aos="fade-in" 
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <Col className="text-column" style={isNotPhone ? introductionNotPhoneStyle : introductionForPhoneStyle} md={6} sm={10}>
                        <p className="title">Hi there! I'm Yuwen.</p>
                        <p>I am a <a target="_blank" href={"https://www.hcii.cmu.edu/academics/mhci"}>Master of Human-Computer Interaction</a> student at Human-Computer Interaction Institute, Carnegie Mellon University.</p>
                        <p>I'm an aspired Social Media researcher and UX practitioner.</p>
                        <p>Jump to my <Link to="/projects">Projects</Link> or my <Link to="/resume">Resume</Link>.</p>
                    </Col>
                    <Col className="profile-pic-container" style={profilePicContainerStyle} md={6} sm={10}>
                        <img className="profile-pic" style={isNotPhone ? profilePicNotPhoneStyle : profilePicForPhoneStyle} src={ProfilePic} alt="Me"></img>
                    </Col>
                </Row>
                <Row 
                    id="experience" 
                    style={rowStyle, contentRowStyle} 
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <Col id="skill-cloud" style={iconCloudStyle} md={6} sm={10}>
                        <Particles 
                            params={{
                                particles: {
                                    "number": {
                                        "value": 5
                                    },
                                    "line_linked": {
                                        "enable": false
                                    },
                                    shape: {
                                        type: 'image',
                                        "image": [
                                            {
                                                "src": "/icons/text-svg/behavioral-research.svg",
                                            },
                                            {
                                                "src": "/icons/text-svg/user-centered-design.svg",
                                            },
                                            {
                                                "src": "/icons/text-svg/design.svg",
                                            },
                                            {
                                                "src": "/icons/linkedin.svg",
                                            },
                                            {
                                                "src": "/icons/youtube.svg",
                                            },
                                            {
                                                "src": "/icons/weibo.svg",
                                            },
                                        ]
                                    },
                                    "size": {
                                        "value": 40,
                                        "random": false,
                                        "anim": {
                                            "enable": true,
                                            "speed": 1,
                                            "size_min": 20,
                                            "sync": false
                                        }
                                    }
                                }
                            }}/>
                    </Col>
                    <Col className="text-column" style={isNotPhone? experienceTextNotPhoneStyle : experienceTextForPhoneStyle} md={6} sm={10}>
                        <p>
                        Previously, I worked with Professor <a href={"https://www.ics.uci.edu/~gmark/Home_page/Welcome.html"}>Gloria Mark</a> at the University of California, Irvine and <a href={"https://acw.io/"}>Alex Williams</a> at the University of Tennessee, Knoxville as undergraduate research assistant. See my <Link to="/projects">projects</Link> here.
                        </p>
                    </Col>
                </Row>
                <Row 
                    id="interest" 
                    style={rowStyle, contentRowStyle} 
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <Col id="social-media-icon-cloud" style={iconCloudStyle} md={{ span: 6, order: 2 }} sm={10}>
                        <Particles 
                            height="15rem"
                            params={{
                                particles: {
                                    "number": {
                                        "value": 15
                                    },
                                    "line_linked": {
                                        "enable": false
                                    },
                                    shape: {
                                        type: 'image',
                                        "image": [
                                            {
                                                "src": "/icons/github.svg",
                                            },
                                            {
                                                "src": "/icons/twitter.svg",
                                            },
                                            {
                                                "src": "/icons/instagram.svg",
                                            },
                                            {
                                                "src": "/icons/linkedin.svg",
                                            },
                                            {
                                                "src": "/icons/youtube.svg",
                                            },
                                            {
                                                "src": "/icons/weibo.svg",
                                            },
                                        ]
                                    },
                                    "size": {
                                        "value": 30,
                                        "random": false,
                                        "anim": {
                                            "enable": true,
                                            "speed": 1,
                                            "size_min": 20,
                                            "sync": false
                                        }
                                    }
                                }
                            }}    
                        />
                    </Col>
                    <Col className="text-column" style={isNotPhone? experienceTextNotPhoneStyle : experienceTextForPhoneStyle} md={{ span: 6, order: 1 }} sm={10}>
                        My research interest is broadly in <strong>Social Computing</strong>. I seize to use mixed method research to <strong>understand people’s behavior</strong> at scale on social media platforms, and use UX design principles and programming to <strong>improve existing platforms</strong> and promote pro-social outcomes.
                    </Col>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

const rowStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
}

const contentRowStyle = {
    width: "90%",
    margin: "auto",
}

const introductionNotPhoneStyle = {
    paddingTop: "5rem",
    textAlign: "right",
    fontSize: "1.3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
}

const introductionForPhoneStyle = {
    textAlign: "right",
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
}

const profilePicContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "2rem"
}

const profilePicNotPhoneStyle = {
    borderRadius: "100%",
    display: "block",
    width: "22vw",
    margin: "auto"
}

const profilePicForPhoneStyle = {
    borderRadius: "100%",
    display: "block",
    width: "30vw",
    margin: "auto auto 2rem auto"
}

const experienceTextNotPhoneStyle = {
    margin: "5rem auto",
    padding: "2.5rem",
}

const experienceTextForPhoneStyle = {
    fontSize: "16px",
    margin: "2.5rem auto",
}

const iconCloudStyle = {
    height: "20rem",
    backgroundColor: "rgba(49, 52, 66, 21)",
    borderRadius: "1rem",
    padding: "2rem",
    margin: "auto",
}