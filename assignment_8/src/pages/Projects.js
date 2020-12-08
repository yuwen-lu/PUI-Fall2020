import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ProjectCard from '../layout/ProjectCard';


// Functional Component for the project page

export default function Projects() {
    return (
        <React.Fragment>
            <Header />
            <div className="content-wrapper">
                {/* the p tag needs a container, otherwise the width of p tag would be the same as the parent tag */}
                <div className="title-wrapper" style={titleWrapperStyle}><p className="title" style={projectTitleStyle}>Projects</p></div>
                <div className="project-card-wrapper" style={projectCardWrapperStyle}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

const projectCardWrapperStyle = {
    // display: "flex",
    // flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "space-evenly",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 20rem)",
    gridGap: "2rem",
    justifyContent: "space-between"

}

// container for the parent div of title
const titleWrapperStyle = {
    textAlign: "center"
}

const projectTitleStyle = {
    display: "inline-block",
    borderBottom: "#E44C65 2px solid",
}