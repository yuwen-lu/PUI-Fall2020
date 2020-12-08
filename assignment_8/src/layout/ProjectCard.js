import React from 'react';

export default function ProjectCard () {

    return (
        <div className="project-card" style={projectCardStyle}>
            Project Card
        </div>
    )
}

const projectCardStyle = {
    display: "inline-block",
    width: "22rem",
    height: "28vh",
    border: "#fff 3px solid",
    borderRadius: "1rem",
    margin: "2rem auto",
    padding: "1rem 1.5rem",
}