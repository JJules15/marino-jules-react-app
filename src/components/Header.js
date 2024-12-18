import React, {useState} from "react";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleDropdown = (header) => {
        setActiveDropdown(activeDropdown === header ? null : header);
    };

    return (
        <header className="header">
            <nav>
                <ul className="main-menu">
                    <li className="menu-item">
                        <button onClick={() => handleDropdown("about")}>About</button>
                        {activeDropdown === "about" && (
                            <ul className="dropdown">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="contact-me">Contact Me</Link></li>
                            </ul>
                        )}
                    </li>

                    <li className="menu-item">
                        <button onClick={() => handleDropdown("resume")}>Resume</button>
                        {activeDropdown === "resume" && (
                            <ul className="dropdown">
                                <li><Link to="/skills">Skills</Link></li>
                                <li><Link to="/education">Education</Link></li>
                                <li><Link to="/experience">Experience</Link></li>
                                <li><Link to="/awards">Awards</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;