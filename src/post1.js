import React from 'react';
import blogPosts from "./blogPosts.json";
import {Link} from "react-router-dom";

const Post1 = () => {
    const post = blogPosts.find((p) => p.id === 1);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    );
};

export default Post1;