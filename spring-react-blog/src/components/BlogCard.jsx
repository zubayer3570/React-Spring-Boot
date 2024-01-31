import React from 'react';
import { useNavigate } from 'react-router';

const BlogCard = ({blog}) => {

    const navigate = useNavigate();
    const read = () =>{
        navigate("/blogs/" + blog.name)
    }

    return (
        <div onClick={read} style={{marginTop: "10px"}}>
            <div>
                {blog.name}
            </div>
            <div>
                {blog.author}
            </div>
            <div>
                {blog?.text?.substring(0, 20)}
            </div>
        </div>
    );
};

export default BlogCard;