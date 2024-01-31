import React from 'react';

const AddBlog = () => {
    const addBlog = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const author = e.target.author.value;
        const text = e.target.text.value;

        console.log({name, author, text})
        const blog = {author, name, text}

        fetch("http://localhost:8080/add-blog", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(blog)
        })
        .then(res=> res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <div><h1>Add Blog</h1></div>
            <form onSubmit={addBlog}>
                <input type="text" name="name" style={{display: "block"}} />
                <input type="text" name="author" style={{display: "block"}} />
                <textarea name="text" cols="30" rows="10" style={{display: "block"}}></textarea>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default AddBlog;