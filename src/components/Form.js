import React, {useState} from 'react';
import "../styles.css";

//Add form styling into CSS to make look normal

function ContactUsForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted successfully: ", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <br/>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <br/>
            <label>
                Message:
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactUsForm;