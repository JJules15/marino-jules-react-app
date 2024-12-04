import React from 'react';
import "./styles.css";
import Header from "./Header";

const HomePage = () => {
    return (
        <div className="homepage">
            {/* Hero Section */}
            <Header/>
            <section className="hero">
                <img src="logo.svg" alt="logo" />
                <h1>Welcome to my Portfolio</h1>
                <p>Senior Digital Analyst | Student at Boston University | Digital Project Management, Product
                    Development and Marketing</p>
            </section>
            {/*Navigation Link*/}

            <!-- <section id="contact-me">
                <h2>Contact Me</h2>
                <p>Details</p>
            </section>
            <section id="skills">
                <h2>Skills</h2>
                <p>Details</p>
            </section>
            <section id="education">
                <h2>Education</h2>
                <p>Details</p>
            </section>
            <section id="experience">
                <h2>Experience</h2>
                <p>Details</p>
            </section>
            <section id="awards">
                <h2>Awards</h2>
                <p>Details</p>
            </section>
            <section id="blog">
                <h2>Blog</h2>
                <p>Details</p>
            </section> -->

            <section className="introduction">
                <h1>Introduction</h1>
                <p>Lorem Upsum</p>
            </section>
            <section className="details">
                <p>Lorem Ipsum</p>
            </section>
            {/*Footer*/}
            <footer className="footer">
                <p>@ 2024 Marino Jules, All Rights Reserved</p>
                <div className="social-links">
                    <a href="https://github.com/JJules15/marino-jules-react-app">GitHub</a>
                    <a href="https://www.linkedin.com/in/marino-jules/">LinkedIn</a>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;