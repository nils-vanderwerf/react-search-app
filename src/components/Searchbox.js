import React, {useState, useContext} from 'react';
import {QueryContext} from '../contexts/QueryContext'

const SearchBox = (props) => {

    const [query, setQuery] = useContext(QueryContext)

    const onChange = event => {
        event.preventDefault()
        setQuery(event.target.value)
    }

        return (
            <div className="search-box">
                <input className="search" value={query} onChange={onChange}
                    placeholder="Type in a movie to start" >
                </input> 
            </div>
        )
    }

export default SearchBox;