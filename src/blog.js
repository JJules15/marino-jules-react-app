import React from 'react';
import {Link, useParams} from "react-router-dom";
import blogPosts from "./blogPosts.json";
import "./styles.css";

function BlogPage() {
    const id = useParams();
    const blog = blogPosts.find(post => post.id === id);

    if (!blog) {
        return (
            <div>
                <h2>Blog Post Unavailable</h2>
                <Link to="/">Back to Home Page</Link>
            </div>
        );
    }

    return (
        <div className="blog-page">
            <h2>{blog.title}</h2>
            <p>{blog.date}</p>
            <p>{blog.excerpt}</p>
            <Link to="/">Back to Home Page</Link>
        </div>
    );
}

export default BlogPage;