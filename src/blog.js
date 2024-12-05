import React from "react";
import "./Blog.css";
import {useParams} from "react-router-dom";
import blogPosts from "./blogPosts.json";

const Blog = () => {
    const {id} = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));
    post.excerpt = undefined;

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
        </div>
    );
};

export default Blog;