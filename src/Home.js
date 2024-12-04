import react from 'react';
import "styles.css";

const HomePage = () => {
    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
                <img src="logo.svg" alt="logo" />
                <h1>Welcome to my Portfolio</h1>
                <p>Front-End Developer | Designer | Creative Thinker</p>
            </section>
            {/*Navigation Link*/}
            <nav className="navigation">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <a href="#resume">Resume</a>
                <a href="#skills">Skills</a>
                <a href="#education">Education</a>
                <a href="#experience">Experience</a>
                <a href="#awards">Awards</a>
                <a href="#interests">Interests</a>
                <a href="#references">References</a>
                <a href="#Contact">Contact</a>
            </nav>
            <section className="skills">
                <h2>Skills & Highlights</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Marketo</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
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