import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ResumeFile from '../resources/files/Resume-YuwenLu.pdf';
import '../App.css';


export default function Resume() {
    return (
        <React.Fragment>
            <Header />
            <div className="content-wrapper">
                <iframe src={ResumeFile} style={resumeFileStyle} frameBorder="0"></iframe>
            </div>
            
            <Footer />
        </React.Fragment>
    )
}

const resumeFileStyle = {
    width: "70vw",
    height:"120vh",
    margin: "auto"
}