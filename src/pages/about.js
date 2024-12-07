import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles.css"

const About = () => {
    return (
        <div className="about">
            <Header/>
            <h2>About Me</h2>
            <p>
                I am a [Your Profession] with [X years] of experience specializing in [Your Specialty]. I am driven
                by the pursuit of excellence and innovation in the field of [Your Field].
            </p>
            <Footer/>
        </div>
    );
};

export default About;