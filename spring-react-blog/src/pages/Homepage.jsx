import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import BlogList from '../components/BlogList';

const Homepage = () => {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch("https://spring-boot-blog.onrender.com/allBlogs")
            .then(res => res.json())
            .then(data => setArr(data))
    }, [])

    const showSearchBox = () =>{
        const searchBoxContainer = document.getElementById("searchBoxContainer")
        if(searchBoxContainer.clientHeight == 0){
            searchBoxContainer.style.height = "50px"
        } else{
            searchBoxContainer.style.height = 0
        }
    }

    return (
        <div className='px-8'>
            <div className='flex justify-between px-4 mt-4'>
                <Link to='/' className='font-bold text-[22px] lg:text-[22px]'>Z-Spring Blogs</Link>
                <div id='test' className='hidden lg:block'>
                    <SearchBox blogsList={{ arr, setArr }} />
                </div>
                <img onClick={showSearchBox} id='searchIcon' className='w-[30px] block lg:hidden' src="/search.svg" alt="" />
            </div>
            <div id='searchBoxContainer' className='h-0 block lg:hidden overflow-hidden'>
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