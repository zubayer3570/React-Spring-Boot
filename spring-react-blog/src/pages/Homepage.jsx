import React, { useContext, useEffect, useState } from 'react';
import SearchBox from '../components/SearchBox';
import BlogList from '../components/BlogList';

const Homepage = () => {
    let [arr, setArr] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/allBlogs")
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            <SearchBox blogsList={{arr, setArr}} />
            <BlogList blogsList={{arr, setArr}} />
        </div>
    );
};

export default Homepage;