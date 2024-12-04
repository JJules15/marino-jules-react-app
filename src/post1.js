import React from 'react';
import posts from "./blogPosts.json";

const Post = ({title, date, content}) => {
    return (
        <div className="post">
            <h1>{Title}</h1>
            <p className="date">{date}</p>
            <div className="content">{content}</div>
        </div>
    );
};

export default Post;