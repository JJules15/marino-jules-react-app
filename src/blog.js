import React from "react";
import "./Blog.css";

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Blog Post 1",
            date: "December 1, 2024",
            excerpt: "This is a blog post",
            url: "/blog/getting-started/with-react",
        },
        {
            id: 2,
            title: "Blog Post 2",
            date: "December 2, 2024",
            excerpt: "This is a blog post",
            url: "/blog/react-hooks",
        },
    ];

    return (
        <div className="blog">
            <h1>Blog</h1>
            <p>Insights and stories about my life in technology, coding, etc.</p>
            <div className="blog-posts">
                {blogPosts.map(post => (
                    <div className="blog-post" key={post.id}>
                        <h2>{post.title}</h2>
                        <p className="date">{post.date}</p>
                        <p>{post.excerpt}</p>
                        <a href={post.url}>Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;