import React, {useRef, useState} from "react";
import "./Header.css";
import {Link, useLocation} from "react-router-dom";

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const location = useLocation();

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
                                <li><a href="">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact-me">Contact Me</a></li>
                            </ul>
                        )}
                    </li>

                    <li className="menu-item">
                        <button onClick={() => handleDropdown("resume")}>Resume</button>
                        {activeDropdown === "resume" && (
                            <ul className="dropdown">
                                <li><a href="/skills">Skills</a></li>
                                <li><a href="/education">Education</a></li>
                                <li><a href="/experience">Experience</a></li>
                                <li><a href="/awards">Awards</a></li>
                            </ul>
                        )}
                    </li>

                    <li className="menu-item">
                        <a href="/blog">Blog</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;