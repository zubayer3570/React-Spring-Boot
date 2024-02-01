import React from 'react';
import { useNavigate } from 'react-router';

const BlogCard = ({blog}) => {

    const navigate = useNavigate();
    const read = () =>{
        navigate("/blogs/" + blog.name)
    }

    return (
        <div style={{marginTop: "10px"}} className='shadow-lg rounded-md m-4 p-4 font-bold'>
            <div className='text-green-500 text-center text-[20px]'>
                {blog.name}
            </div>
            <div className='text-[grey] text-[11px]'>
                <span className='text-[8px]' >By</span> {" " + blog.author}
            </div>
            <div>
                {blog?.text?.substring(0, 30) + "... "}
                <button onClick={read} className='text-[13px] text-orange-500'>Read more</button>
            </div>
        </div>
    );
};

export default BlogCard;