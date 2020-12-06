import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';


// Functional Component for the project page

export default function Projects() {
    return (
        <React.Fragment>
            <Header />
            <div className="content-wrapper">Projects</div>
            <Footer />
        </React.Fragment>
    )
}