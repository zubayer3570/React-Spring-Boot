import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BlogCard from '../components/BlogCard';

const ReadBlog = () => {
    const router = useParams()
    const [blog, setBlog] = useState({});
    useEffect(() => {
        fetch("http://localhost:8080/get-blog/" + router.name)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div>
            <p style={{textAlign: "center", fontWeight: "bold"}} >{blog?.name}</p>
            <p style={{textAlign: "center", fontWeight: "500"}} >{blog?.author}</p>
            <p style={{textAlign: "center"}} >{blog?.text}</p>
        </div>
    );
};

export default ReadBlog;