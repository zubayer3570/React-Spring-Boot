import React from 'react';

const SeachBox = ({ blogsList }) => {
    const search = (e) => {
        e.preventDefault()
        let searchText;
        if (e.type == "change") {
            searchText = e.target.value;
            if (searchText.length < 5 && searchText.length > 0) {
                return
            }
        } else {
            searchText = e.target.searchText.value;
        }
        const keyword = searchText.length == 0 ? "all" : searchText
        fetch("https://spring-boot-blog.onrender.com/search/" + keyword)
            .then(res => res.json())
            .then(data => blogsList.setArr(data))
    }
    return (
        <form onSubmit={search}>
            <input onChange={search} type="text" name="searchText" className='h-[30px] w-[200px] lg:w-[300px] rounded-full m-4 px-4 border-black border-[2px]' />
            <input type='submit' value="Search" className='font-bold px-2 py-1 rounded-md bg-green-500 text-white' />
        </form>
    );
};

export default SeachBox;