import React from "react";
import "./Blog.css";
import {useParams} from "react-router-dom";
import blogPosts from "./blogPosts.json";
import {Link} from "react-router-dom";

const Blog = () => {
    const {id} = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default Blog;