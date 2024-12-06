import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Skills = () => {
    return (
        <div className="skills">
            <Header/>
            <h2>Skills</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML & CSS</li>
                <li>Version Control (Git)</li>
            </ul>
            <Footer/>
        </div>
    );
};

export default Skills;