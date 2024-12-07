import React, {useRef, useState} from "react";
import "./Header.css";
import {NavLink, Link, useLocation} from "react-router-dom";

(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})
(window, document, 'script', 'dataLayer', 'GTM-K2S9BFZ3');

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

                    <li className="menu-item">
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;