import React from 'react';

const SeachBox = ({blogsList}) => {
    const search = () => {
        const searchText = document.getElementById("searchText").value;
        const keyword = searchText.length < 1 ? "all" : searchText
        fetch("https://spring-boot-blog.onrender.com/search/" + keyword)
            .then(res => res.json())
            .then(data => blogsList.setArr(data))
    }
    return (
        <div>
            <input onChange={search} type="text" name="" id="searchText" className='h-[30px] w-[200px] lg:w-[300px] rounded-full m-4 px-4 border-black border-[2px]' />
            <button onClick={search} className='font-bold px-2 py-1 rounded-md bg-green-500 text-white' >Search</button>
        </div>
    );
};

export default SeachBox;