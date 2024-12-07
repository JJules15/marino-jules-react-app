import React from "react";
import "../styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

const Experience = () => {
    return (
        <div className="experience">
            <Header/>
            <h2>Experience</h2>
            <div>
                <h3>Job Title 1</h3>
                <p>[Company Name] - [Year]</p>
                <p>Brief description of your role and achievements.</p>
            </div>
            <div>
                <h3>Job Title 2</h3>
                <p>[Company Name] - [Year]</p>
                <p>Brief description of your role and achievements.</p>
            </div>
            <Footer/>
        </div>
    );
};

export default Experience;