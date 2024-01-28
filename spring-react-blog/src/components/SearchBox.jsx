import React from 'react';

const SeachBox = ({blogsList}) => {
    const search = () => {
        const searchText = document.getElementById("searchText").value;
        blogsList.setArr([...blogsList.arr, searchText]);
    }
    return (
        <div>
            <input type="text" name="" id="searchText" />
            <button onClick={search}>Search</button>
        </div>
    );
};

export default SeachBox;