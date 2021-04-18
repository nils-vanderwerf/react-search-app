import React from 'react';
import {useState} from 'react'

const SearchBox = (props) => {
    const [query, setQuery] = useState('')

    // const handleInput = event => {
    //     setQuery(event.target.value)

    // }

    const handleClick = event => {
    event.preventDefault()
    props.setSearchValue(event.target.value)
    }
    return (
        <div className="search-box">
            <input className="search" value={props.value}
                placeholder="Type in a movie to start" onChange={(event) => props.setQuery(event.target.value)}>
            </input> 
            <button onClick={handleClick}>Search</button>
        </div>
    )
} 

export default SearchBox;