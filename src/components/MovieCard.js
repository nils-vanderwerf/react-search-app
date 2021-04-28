import '../css/App.css'
import '../css/MovieCard.css'
import React, {useContext, useState} from 'react'
import AddFavourites from './AddFavourites'
import RemoveFavourites from './RemoveFavourites'

import AddWatchList from './AddWatchList'
import AddWatched from './AddWatched'
import Watched from '../pages/Watched'
import {FavouritesContext} from '../contexts/FavouritesContext'
import {WatchedContext} from '../contexts/WatchedContext'
import {WatchListContext} from '../contexts/WatchListContext'


const MovieCard = ({id, movie, key, isFavourited}) => {
    const [favourites, setFavourites] = useContext(FavouritesContext)
    const [watched, setWatched] = useContext(WatchedContext)

    const movieIsFave = favourites.find(element => element.imdbID === movie.imdbID)
    return (
        <div className="movie-card" key={movie.imdbID}>
            <div className="image-container">
                <img src={movie.Poster} alt={movie.Title}/>
            </div>
            <div className="card-info-container">
                <h2>{movie.Title}</h2>
                {/* <h3>Director: {movie.Director}</h3> */}
                <h3>Released: {movie.Year}</h3>
                {/* <h3>IMDB Rating: {movie.imdbRating}</h3> */}
                {/* <p><strong>Plot:</strong> {movie.Plot}</p> */}
            </div>

            <div className="controls">
                    {
                    
                    movieIsFave ?  <RemoveFavourites movie={movie}/> : <AddFavourites movie={movie}/> }
                    <AddWatchList movie={movie}/>
                    <AddWatched movie={movie}/>
            </div>
        </div> 
    )
}

export default MovieCard;