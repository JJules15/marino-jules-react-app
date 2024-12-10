import React from "react";
import {useNavigate} from "react-router-dom";

function BlogItem({id, title, excerpt, date}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blogs/${id}`);
    };

    return (
        <div className="blog" onClick={handleClick} style={{cursor: "pointer"}}>
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{excerpt}</p>
        </div>
    );
}

export default BlogItem;