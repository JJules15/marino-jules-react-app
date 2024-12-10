import React from "react";
import "../styles.css";
import ContactUsForm from "../components/Form";

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <p>Email: mjules@bu.edu</p>
            <p>Phone: (123) 456-7890</p>
            <ContactUsForm/>
        </div>
    );
};

export default Contact;