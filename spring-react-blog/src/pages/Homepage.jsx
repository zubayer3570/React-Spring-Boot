import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import BlogList from '../components/BlogList';
import BlogCard from '../components/BlogCard';
import AddBlog from '../components/AddBlog';

const Homepage = () => {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/allBlogs")
            .then(res => res.json())
            .then(data => setArr(data))
    }, [])

    return (
        <div className='px-8'>
            <div className='flex justify-between px-4 mt-4'>
                <p className='font-bold text-[22px]'>Z-Spring Blogs</p>
                {console.log(arr)}
                <SearchBox blogsList={{ arr, setArr }} />
            </div>
            <BlogList blogsList={{ arr, setArr }} />
            <div className='flex justify-center'>
                <Link to={"/add-blog"} className='font-bold px-2 py-1 rounded-md bg-green-500 text-white'>Add a Blog +</Link>
            </div>
        </div>
    );
};

export default Homepage;