import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

const Updatepage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const blog = location.state;
    useEffect(() => {
        const updateForm = document.getElementById("updateForm")
        updateForm.name.value = blog?.name;
        updateForm.author.value = blog?.author;
        updateForm.text.value = blog?.text;
    }, [])

    const updateBlog = (e) => {
        e.preventDefault();
        const updatedBlog = {
            _id: blog._id,
            name: e.target.name.value,
            date: blog.date,
            author: e.target.author.value,
            text: e.target.text.value,
        }
        fetch("http://localhost:8080/update-blog", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedBlog)
        })
            .then(res => res.json())
            .then(data => navigate("/blogs/" + updatedBlog._id))
    }

    return (
        <div className='px-8'>
            <p className='text-[30px] text-center font-bold mt-2'>
                Update Blog
            </p>
            <form onSubmit={updateBlog} id='updateForm' className='flex flex-col items-center'>

                <div className='mt-2 w-[90%] shrink-0'>
                    <label htmlFor="name" className='text-[11px] font-bold'>Title</label>
                    <input type="text" name="name" className='w-full block px-2 border-black border-2 rounded-md' />
                </div>

                <div className='mt-2 w-[90%] shrink-0'>
                    <label htmlFor="name" className='text-[11px] font-bold'>Author</label>
                    <input type="text" name="author" className='w-full block px-2 border-black border-2 rounded-md' />
                </div>

                <div className='mt-2 w-[90%] shrink-0'>
                    <label htmlFor="name" className='text-[11px] font-bold'>Article</label>
                    <textarea name="text" cols="30" rows="10" className='w-full block px-2 border-black border-2 rounded-md'></textarea>
                </div>

                <div className='w-[90%] flex justify-end mt-4'>
                    <button type='text' className='w-[100px] font-bold px-2 py-1 mr-2 rounded-md bg-red-500 text-white' >
                        Cancel
                    </button>
                    <button type='submit' className='w-[100px] font-bold px-2 py-1 rounded-md bg-green-500 text-white' >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Updatepage;