import React from 'react';
import "../styles.css";
import Header from "../components/Header";
import blogPosts from "../blogPosts.json";
import {Link} from "react-router-dom";
import BlogPost from "../blog";
import Footer from "../components/Footer";

const HomePage = () => {
    const featuredPosts = blogPosts.slice(0, 3);

    return (
        <div className="homepage">
            {/* Hero Section */}
            <Header/>
            <section className="hero">
                <img src="../logo.svg" alt="logo"/>
                <h1>Welcome to my Portfolio</h1>
                <p>Senior Digital Analyst | Student at Boston University | Digital Project Management, Product
                    Development and Marketing</p>
            </section>
            {/*Navigation Link*/}

            <section className="introduction">
                <h1>My Portfolio</h1>
                <p>I am a Marketing Technology enthusiast, finding unmatched.......</p>
            </section>
            <section className="featured-blogs">
                <h2>Featured Blogs</h2>
                <div className="blog-grid">
                    <BlogPost post={featuredPosts[0]}/>
                    <BlogPost post={featuredPosts[1]}/>
                    <BlogPost post={featuredPosts[2]}/>
                </div>
            </section>
            {/*Footer*/}
            <Footer/>
        </div>
    );
};

export default HomePage;