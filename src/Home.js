import React from 'react';
import "./styles.css";
import Header from "./Header";
import {Link, NavLink} from "react-router-dom";
import "./blogPosts.json";

const HomePage = () => {
    return (
        <div className="homepage">
            {/* Hero Section */}
            <Header/>
            <section className="hero">
                <img src="logo.svg" alt="logo"/>
                <h1>Welcome to my Portfolio</h1>
                <p>Senior Digital Analyst | Student at Boston University | Digital Project Management, Product
                    Development and Marketing</p>
            </section>
            {/*Navigation Link*/}

            <section className="introduction">
                <h1>My Portfolio</h1>
                <p>I am a Marketing Technology enthusiast, finding unmatched.......</p>
            </section>
            <section className="details">
                {blogPosts.map((post) => (
                    <Link to={`/blog/${post.id}`} key={post.id}>
                        {post.title}
                    </Link>
                ))}
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