import React, {useEffect, useState} from 'react';
import "../styles.css";
import blogPosts from "../blogPosts.json";
import BlogPost from "../blogPosts.json"
import BlogItem from "../BlogItem";

const HomePage = () => {
    const [featuredPosts, setFeaturedPosts] = useState([]);

    useEffect(() => {
        setFeaturedPosts(blogPosts);
    }, []);

    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
                <img src="../logo.svg" alt="logo"/>
                <h1>Welcome to my Portfolio</h1>
                <p>Senior Digital Analyst | Student at Boston University | Digital Project Management, Product
                    Development and Marketing</p>
            </section>
            {/*Navigation Link*/}

            <section className="introduction">
                <h1>My Portfolio</h1>
                <p>I am a Marketing Technology enthusiast with experience in HTML, CSS and JavaScript.
                    I have over 5 experience in digital marketing, product management, marketing operations.
                    I'm currently enrolled in a MS in Software Development from Boston University Metropolitan
                    University.</p>
            </section>
            <section className="featured-blogs">
                <h2>Featured Blogs</h2>
                <div className="blog-grid">
                    {featuredPosts.map((post) => (
                        <BlogItem
                            key={post.id}
                            url={post.url}
                            title={post.title}
                            date={post.date}
                            excerpt={post.excerpt}
                        />
                    ))}
                </div>
            </section>
            {/*Footer*/}
        </div>
    );
};

export default HomePage;