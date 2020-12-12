import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import BackButton from '../resources/icons/arrow-back.svg';
import LocationIcon from '../resources/icons/location.svg';
import { Container, Row, Col } from 'react-bootstrap';

export default function HitRanger() {
    return (
        <React.Fragment>
            <Header />
            <Container>
                <div className="back-button">
                    <Link to="/Projects">
                        <img src={BackButton} style={backIconStyle}></img>Back
                    </Link>
                </div>
                {/* the p tag needs a container, otherwise the width of p tag would be the same as the parent tag */}
                <div className="title-wrapper" style={titleWrapperStyle}><p className="title" style={projectTitleStyle}>Life Events</p></div>
                <Row>
                    <Col style={topLeftColStyle}></Col>
                    <Col style={rightColStyle}></Col>
                </Row>
                <Row>
                    <Col style={leftColStyle}>
                        <div style={locationColWrapperStyle}>
                            <img src={LocationIcon} style={locationIconStyle}></img>
                            Pittsburgh, PA
                        </div>
                    </Col>
                    <Col style={rightColStyle}>
                        <div style={dateWrapperStyle}>
                            <p style={dateStyle}>Aug 2020</p>
                        </div>
                        <p style={lifeEventContentStyle}>
                            Left California,<br></br>
                            Started grad school<br></br>
                            at Carnegie Mellon University<br></br>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col style={leftColStyle}>
                        <div style={locationColWrapperStyle}>
                            <img src={LocationIcon} style={locationIconStyle}></img>
                            virtually in Dalian, China
                        </div>
                    </Col>
                    <Col style={rightColStyle}>
                        <div style={dateWrapperStyle}>
                            <p style={dateStyle}>June 2020</p>
                        </div>
                        <p style={lifeEventContentStyle}>
                            Graduated from <br></br>
                            Dalan University of Technology<br></br>
                            during a pandemic! 🎉<br></br>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col style={leftColStyle}>
                        <div style={locationColWrapperStyle}>
                            {/* <img src={LocationIcon} style={locationIconStyle}></img>
                            Pittsburgh, PA */}
                        </div>
                    </Col>
                    <Col style={rightColStyle}>
                        <div style={dateWrapperStyle}>
                            <p style={dateStyle}>Mar 2020</p>
                        </div>
                        <p style={lifeEventContentStyle}>
                            COVID-19 was officially declared<br></br>
                            as pandemic by WHO<br></br>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col style={leftColStyle}>
                        <div style={locationColWrapperStyle}>
                            <img src={LocationIcon} style={locationIconStyle}></img>
                            Irvine, CA
                        </div>
                    </Col>
                    <Col style={rightColStyle}>
                        <div style={dateWrapperStyle}>
                            <p style={dateStyle}>Dec 2019</p>
                        </div>
                        <p style={lifeEventContentStyle}>
                            Started study abroad at<br></br>
                            the University of California, Irvine<br></br>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col style={leftColStyle}>
                        <div style={locationColWrapperStyle}>
                            <img src={LocationIcon} style={locationIconStyle}></img>
                            Boston, MA
                        </div>
                    </Col>
                    <Col style={rightColStyle}>
                        <div style={dateWrapperStyle}>
                            <p style={dateStyle}>Oct 2019</p>
                        </div>
                        <p style={lifeEventContentStyle}>
                            Attended <a target="_blank" href="https://2019.igem.org/Main_Page">iGEM</a> as a member of<br></br>
                            <a target="_blank" href="https://2019.igem.org/Team:DUT_China_A">DUT_China_A</a><br></br>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col style={leftColStyle}>
                        <div style={locationColWrapperStyle}>
                            <img src={LocationIcon} style={locationIconStyle}></img>
                            Nantong, Jiangsu, China
                        </div>
                    </Col>
                    <Col style={rightColStyle}>
                        {/* add in an empty div here since there's no date for this row */}
                        <div style={{width: "10rem"}}></div>
                        <p style={lifeEventContentStyle}>
                            Left Germany for China <br></br>
                            <i>Home sweet home</i>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col style={leftColStyle}>
                        <div style={locationColWrapperStyle}>
                            {/* <img src={LocationIcon} style={locationIconStyle}></img>
                            Boston, MA */}
                        </div>
                    </Col>
                    <Col style={{...rightColStyle, height: "10rem"}}>
                        {/* <div style={dateWrapperStyle}>
                            <p style={dateStyle}>Oct 2019</p>
                        </div>
                        <p style={lifeEventContentStyle}>
                            Attended <a target="_blank" href="https://2019.igem.org/Main_Page">iGEM</a> as a member of<br></br>
                            <a target="_blank" href="https://2019.igem.org/Team:DUT_China_A">DUT_China_A</a><br></br>
                        </p> */}
                    </Col>
                </Row>
                <Row>
                    <Col style={leftColStyle}>
                        <div style={locationColWrapperStyle}>
                            <img src={LocationIcon} style={locationIconStyle}></img>
                            Munich, Germany
                        </div>
                    </Col>
                    <Col style={rightColStyle}>
                        <div style={dateWrapperStyle}>
                            <p style={dateStyle}>Apr 2019</p>
                        </div>
                        <p style={lifeEventContentStyle}>
                            Started study abroad at<br></br>
                            Technical University of Munich
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col style={leftColStyle}>
                        <div style={locationColWrapperStyle}>
                            <img src={LocationIcon} style={locationIconStyle}></img>
                            New York, NY
                        </div>
                    </Col>
                    <Col style={rightColStyle}>
                        <div style={dateWrapperStyle}>
                            <p style={dateStyle}>Mar 2019</p>
                        </div>
                        <p style={lifeEventContentStyle}>
                            Attended <a target="_blank" href="https://www.nmun.org/">National Model United Nations</a><br></br>
                            as a member of the Dalian University <br></br> of Technology delegation
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col style={{...topLeftColStyle, margin: "0.3rem auto"}}></Col>
                    <Col style={rightColStyle}></Col>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

// // set width for the bootstrap container
// const projectPageContainerStyle = {
//     width: "80vw",
// }

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

// the col style here is different from other pages
const topLeftColStyle = {
    margin: "1rem auto 0.3rem",
    padding: "0",
    height: "4rem",
    borderRight: "#e44c65 4px dotted"
}

const leftColStyle = {
    margin: "0",
    padding: "0",
    borderRight: "#e44c65 4px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
}

// style for the left column content wrapper (location info)
const locationColWrapperStyle = {
    paddingRight: "1rem",
    // move the location to vertically align with date on the right
    position: "relative",
    bottom: "1rem",
}

const locationIconStyle = {
    width: "1.8rem",
    marginRight: "0.5rem",
    position: "relative",
    bottom: "4px",
}

const rightColStyle = {
    margin: "0",
    padding: "0",
    display: "flex",
    alignItems: "center"
}

// style for the date on page and its bottom border
const dateWrapperStyle = {
    display: "inline-block",
    width: "10rem",
    paddingLeft: "1rem",
    borderBottom: "#e44c65 4px solid",
    // align the bottom border vertically center
    position: "relative",
    bottom: "1rem",
}

const dateStyle = {
    fontSize: "0.85rem",
    margin: "0",
}

// style for life event content
const lifeEventContentStyle = {
    display: "inline-block",
    margin: "3rem 0 0 1rem",
}