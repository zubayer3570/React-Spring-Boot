import React from 'react';
import { useNavigate } from 'react-router';

const AddBlog = () => {
    const navigate = useNavigate();
    const addBlog = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const author = e.target.author.value;
        const text = e.target.text.value;

        const blog = { author, name, text }

        fetch("http://localhost:8080/add-blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => navigate("/"))
    }

    const cancel = () => navigate("/")

    return (
        <div className='px-8'>
            <p className='text-[30px] text-center font-bold mt-2'>
                Add Blog
            </p>
            <form onSubmit={addBlog} className='flex flex-col items-center'>

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
                    <button onClick={cancel} type='text' className='w-[100px] font-bold px-2 py-1 mr-2 rounded-md bg-red-500 text-white' >
                        Cancel
                    </button>
                    <button type='submit' className='w-[100px] font-bold px-2 py-1 rounded-md bg-green-500 text-white' >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;