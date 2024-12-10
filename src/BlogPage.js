import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import blogPosts from "./blogPosts.json";
import "./styles.css";
import BlogItem from "./BlogItem";

function BlogPage() {

    const [featuredPosts, setFeaturedPosts] = useState([]);

    useEffect(() => {
        setFeaturedPosts(blogPosts);
    }, []);

    return (
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
    );
}

export default BlogPage;