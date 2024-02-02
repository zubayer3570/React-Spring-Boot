import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogsList }) => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                {
                   blogsList?.arr.map(blog => <BlogCard blog={blog} key={blog.name} />) 
                }
            </div>
        </div>
    );
};

export default BlogList;