import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles.css";

const Contact = () => {
    return (
        <div className="contact">
            <Header/>
            <h2>Contact Me</h2>
            <p>Email: your.email@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your
                LinkedIn</a></p>
            <Footer/>
        </div>
    );
};

export default Contact;