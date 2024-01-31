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
        <div>
            <SearchBox blogsList={{ arr, setArr }} />
            <BlogList blogsList={{ arr, setArr }} />
            <Link to={"/add-blog"}>Add a Blog</Link>
        </div>
    );
};

export default Homepage;