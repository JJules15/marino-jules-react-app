import React from 'react';
import {Link} from "react-router-dom";
import blogPosts from "./blogPosts.json";
import Header from "./Header";
import "./styles.css";

const BlogPage = () => {
    return (
        <div className="blog-page">
            <Header/>
            <main className="blog-list">
                <h1>Blog</h1>
                <div className="blog-items">
                    {blogPosts.map((post) => (
                        <div className="blog-item" key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.excerpt}</p>
                            <Link to={`/blog/${post.id}`} className="read-more">
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
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

export default BlogPage;