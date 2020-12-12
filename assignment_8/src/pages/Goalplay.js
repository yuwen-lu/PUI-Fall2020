import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import BackButton from '../resources/icons/arrow-back.svg';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import GoalplayAppScreenshot from '../resources/images/goalplay-screenshot-homepage-lowres.PNG';
import GoalplayPresentationPic from '../resources/images/goalplay-cat-lowres.png';

export default function Goalplay() {
    // the animate on scroll library to animate items on home page
    AOS.init();
    return (
        <React.Fragment>
            <Header />
            <Container style={projectPageContainerStyle}>
                <div className="back-button">
                    <Link to="/Projects">
                        <img src={BackButton} style={backIconStyle}></img>Back
                    </Link>
                </div>
                {/* the p tag needs a container, otherwise the width of p tag would be the same as the parent tag */}
                <div className="title-wrapper" style={titleWrapperStyle}><p className="title" style={projectTitleStyle}>Goalplay Video Coach</p></div>
                <Row>
                    <Col style={colStyle}>
                    <p>An AI-powered video coaching APP designed for amateur soccer goalkeepers without access to professional training resources.</p>
                    <p>Our project collaborates with real industry client, <a target="_blank" href="https://www.goalplay.com/en/">Goalplay GmbH &amp; Co. KG</a>, as part of the iOS practicum course at Technical University of Munich ( <a target="_blank" href="https://ase.in.tum.de/lehrstuhl_1/people/people-archive/123-teaching/st19/1037-ipraktikum-ss19">iPraktikum 2019</a> ). Goalplay is a company that combines the latest technology and the goalkeeper training founded by the legendary German goalkeeper <a target="_blank" href="https://en.wikipedia.org/wiki/Oliver_Kahn">Oliver Kahn</a>.</p>
                    <p>Our team implemented industry-level Agile development principles, put our user at the center of our design and development, and paid special attention to the usability of the app.</p>
                    <p>We delivered our project to our client through a <a target="_blank" href="https://youtu.be/3wiECPDSMbs">Design Review</a> and a <a target="_blank" href="https://youtu.be/k1QLGBEZLko">Client Acceptance Test</a>. Click on the links to watch the recordings of our presentations.</p>
                    </Col>
                    <Col style={colStyle}>
                        <img src={GoalplayAppScreenshot} style={projectImgStyle}></img>
                    </Col>
                </Row>
                <Row
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <Col style={colStyle}>
                        <img src={GoalplayPresentationPic} style={projectImgStyle}></img>
                    </Col>
                    <Col style={colStyle}>
                        <p style={quoteContentStyle}><i>"Your Client Acceptance Tests presentation is the best I have ever seen."</i></p>
                        <p style={quoteContentStyle}>-- Bernd Brügge, <br></br>
                            Professor of the course at Technische Universität München, <br></br>
                            Adjunct Prof. at Carnegie Mellon University <br></br>
                        </p>
                    </Col>
                </Row>
                <Row
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <Col style={colStyle}>
                        <p style={boldedTextStyle}>Machine Learning-Powered</p>
                        <p>Our app enabled goalkeepers to record their training videos and replay them, so that they can detect flaws in their practices from an objective view. We also offered <span style={boldedTextStyle}>personalized training plans</span> for users. More than that, we integrated <span style={boldedTextStyle}>Machine Learning classification</span> to detect the goalkeepers' performed training tasks (left/right dive, jump catch, etc.) and automatically calculate the completion status of their training plans. In the future, we can improve our machine learning algorithm to also analyse the users' performance, such as dive distance and jump height, to offer more professional feedback for their training.</p>
                        <p>As one developer in the team, I contributed to building the app using <span style={boldedTextStyle}>Swift</span> and integrated the newly-released Apple <span style={boldedTextStyle}>ARKit motion detection</span> module into our machine learning pipeline. I integrated the module to detect human's joint positions in the video frame and fed the data to our LSTM-based model, which conducted the classification.</p>
                    </Col>
                    <Col style={colStyle}>
                        <p style={boldedTextStyle}>A User-first Approach</p>
                        <p>As the <span style={boldedTextStyle}>Usability Manager</span> of the team, I ensured our app meets the potential users' needs and implemented <span style={boldedTextStyle}>human-centered design</span> principles.</p>
                        <p>Here are some activities we conducted as parts of our user-centered design:</p>
                        <ul style={ulStyle}>
                            <li>User interview (at a local football academy)</li>
                            <li>Continuous usability evaluation using the a testing framework named CuuSE</li>
                            <li>Usability heuristics evaluation</li>
                            <li>User testing</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Footer />
            
        </React.Fragment>
    )
}

// set width for the bootstrap container
const projectPageContainerStyle = {
    width: "80vw",
}

// container for the parent div of title
const titleWrapperStyle = {
    textAlign: "center"
}

const projectTitleStyle = {
    display: "inline-block",
    borderBottom: "#E44C65 2px solid",
}

const backIconStyle = {
    position: "relative",
    top: "-2px",
}

// add margin to columns

const colStyle = {
    margin: "4rem 2rem",
    padding: "0",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
}

const projectImgStyle = {
    width: "30vw",
    borderRadius: "1rem",
}

// style for quoted text

const quoteContentStyle = {
    color: "#ADADAD",
}

// style for subtitles 

const boldedTextStyle = {
    fontWeight: "600"
}

// style for unordered lists to hang the bullet points

const ulStyle = {
    marginLeft: "2rem",
}