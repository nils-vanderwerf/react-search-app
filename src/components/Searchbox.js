import React from 'react';

const SearchBox = (props) => {
    return (
        <div className="search-box">
            <input className="search" value={props.value}
                placeholder="Type to search..." 
                // Sets the value of the search to the users input
                onChange ={(event) => props.setSearchValue(event.target.value)}> 
            </input> 
        </div>
    )
} 

export default SearchBox;