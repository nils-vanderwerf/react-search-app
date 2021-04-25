import '../css/App.css';
import React, {useContext} from 'react'
import Heading from '../components/Heading'
import {WatchedContext} from '../contexts/WatchedContext'
import MovieList from '../components/MovieList'
import AddFavourites from '../components/AddFavourites';

const Watched = () => {
    const [watched, setWatched] = useContext(WatchedContext)

    return (
        <div class="favourites-container">
            <Heading heading ='Watched'/>
            <MovieList movies={watched}/>  
        </div>
    )
}

export default Watched;