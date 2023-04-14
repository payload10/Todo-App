import React from 'react';
import './SearchItem.css'

const SearchItem = ({search, handleSearchValue}) => {
    return (
        
        <form className='search' onSubmit={(event) => event.preventDefault()}>
            <input type="text" placeholder='Search an item' value={search} onChange={handleSearchValue}/>
        </form>
    )
}

export default SearchItem