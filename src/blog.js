import React from "react";
import "./Blog.css";
import {useParams} from "react-router-dom";
import blogPosts from "./blogPosts.json";
import {Link} from "react-router-dom";

const BlogPost = () => {
    const {id} = useParams();
    const post = blogPosts.find((post) => post.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="blog-post">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default BlogPost;