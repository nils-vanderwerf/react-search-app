
import React from 'react'
import Heading from './Heading'
import SearchBox from "./SearchBox"
import MovieList from './MovieList'
import QueryContext from '../contexts/QueryContext'



const SideBar = (props) => {
    return (
        
        <div className="sidebar">
            <Heading heading ='Search for a film'/>
            <SearchBox />
            <MovieList movies={props.favourites} handleFavouritesClick={props.removeFavouriteMovie}/>
        </div>
    )
}

export default SideBar;