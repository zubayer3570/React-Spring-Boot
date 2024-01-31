import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogsList }) => {
    return (
        <div>
            <div>
                {
                   blogsList?.arr.map(blog => <BlogCard blog={blog} key={blog.name} />) 
                }
            </div>
        </div>
    );
};

export default BlogList;