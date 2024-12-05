import React from 'react';
import posts from "./blogPosts.json";
import {Link} from "react-router-dom";

const Post1 = ({title, date, content}) => {
    return (
        <div className="blog-post">
            <h1>{Title}</h1>
            <p className="date">{date}</p>
            <div className="content">{content}</div>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default Post1;