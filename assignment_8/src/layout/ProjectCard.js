import React from 'react';

export default function ProjectCard (props) {
    console.log(props.bgImage);

    return (
        
        <div className="project-card" style={projectCardStyle}>
            <div style={{...projectCardBgImgStyle, backgroundImage: "url(" + props.bgImage +")"}}></div>
            <div style={projectCardTextContainerStyle}>
                <div style={cardTitleStyle}>{props.title}</div>
                <div style={cardDescriptionStyle}>{props.description}</div>
                <div>
                    <div style={cardDetailStyle}>{props.job}</div>
                    <div style={cardDetailStyle}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

// the following three style sheet variables are for project cards.
// since it's hard to create psuedo elements in react, I added a separate div for the whole card, a div for the background image, and a div for the text.

const projectCardStyle = {
    width: "25rem",
    height: "18rem",
    borderRadius: "1rem",
    margin: "2rem auto",
    // margin: "2rem auto",
    
}

const projectCardBgImgStyle = {
    width: "25rem",
    height: "18rem",
    borderRadius: "1rem",
    backgroundPosition: "center", /* Center the image */
    backgroundRepeat: "no-repeat", /* Do not repeat the image */
    backgroundSize: "cover", /* Resize the background image to cover the entire container */
    opacity: "15%"
}

const projectCardTextContainerStyle = {
    width: "25rem",
    height: "18rem",
    padding: "1rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    bottom: "18rem"
}

const cardTitleStyle = {
    hyphen: "none",
    fontSize: "1rem",
    lineHeight: "1.5rem",
    marginBottom: "1.5rem"

}

const cardDescriptionStyle = {
    fontWeight: "500",
    lineHeight: "2rem",
}

const cardDetailStyle = {
    fontSize: "0.8rem",
    lineHeight: "1.5rem",
    textAlign: "right"
}