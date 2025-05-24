import React from "react";
import resume from "../assets/Pictures/anas-me-resume.pdf";

const Resume = () => {
    const handleOpenResume = () => {
        // Open resume in a new tab
        window.open(resume, '_blank', 'noopener,noreferrer');
    };

    return { handleOpenResume };
};

export default Resume;