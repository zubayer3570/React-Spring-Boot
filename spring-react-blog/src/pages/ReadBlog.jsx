import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';

const ReadBlog = () => {
    const router = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const [blog, setBlog] = useState({});
    useEffect(() => {
        fetch("http://localhost:8080/get-blog/" + router._id)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return data._id ? setBlog(data) : ""
            })
    }, [])

    const deleteBlog = () => {
        fetch("http://localhost:8080/delete-blog", {
            method: "DELETE",
            body: blog._id
        })
            .then(res => navigate('/'))
    }

    const editBlog = () => {
        navigate('/update-blog', { state: { ...blog, pathname: location.pathname } },)
    }


    return (
        <div className='px-8 mt-4'>
            <Link to='/' className='font-bold text-[22px] lg:text-[22px]'>Z-Spring Blogs</Link>
            <p className='text-center font-bold text-[30px]' >{blog?.name}</p>
            <p className='text-[12px] font-bold'>By {blog?.author}</p>
            <p className='text-[13px]'>Published: {blog.date}</p>
            <p>{blog?.text}</p>
            <button onClick={deleteBlog} className='font-bold px-2 py-1 mt-8 rounded-md bg-red-500 text-white mr-2'>Delete this Blog +</button>
            <button onClick={editBlog} className='font-bold px-2 py-1 mt-8 rounded-md bg-blue-500 text-white'>Edit Blog</button>
        </div>
    );
};

export default ReadBlog;