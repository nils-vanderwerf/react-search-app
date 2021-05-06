import '../css/App.css'
import '../css/MovieCard.css'
import React, { useContext } from 'react'
import AddFavourites from './AddFavourites'
import RemoveFavourites from './RemoveFavourites'

import AddWatchList from './AddWatchList'
import RemoveFromWatchList from './RemoveFromWatchList'

import AddWatched from './AddWatched'
import RemoveFromWatched from './RemoveFromWatched'

import { FavouritesContext } from '../contexts/FavouritesContext'
import { WatchedContext } from '../contexts/WatchedContext'
import { WatchListContext } from '../contexts/WatchListContext'

const MovieCard = ({ movie }) => {
    const [favourites] = useContext(FavouritesContext)
    const [watched] = useContext(WatchedContext)
    const [watchList] = useContext(WatchListContext)

    // Check for duplicates, create a ternary operator below
    const movieIsFave = favourites.find(element => element.imdbID === movie.imdbID)
    const movieIsInWatchList = watchList.find(element => element.imdbID === movie.imdbID)
    const movieIsInWatched = watched.find(element => element.imdbID === movie.imdbID)

    return (
        <div className="movie-card" key={movie.imdbID}>
            <div className="image-container">
                <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="card-info-container">
                <h2>{movie.Title}</h2>
                <h3>Released: <strong>{movie.Year}</strong></h3>
            </div>

            <div className="controls">
                {movieIsFave ?
                    <RemoveFavourites movie={movie} /> :
                    <AddFavourites movie={movie} />
                }

                {/* Nested ternary operator */}
                {movieIsInWatchList ?
                    <RemoveFromWatchList movie={movie} /> :
                    <AddWatchList movie={movie} />
                }

                {movieIsInWatched ?
                    <RemoveFromWatched movie={movie} /> :
                    <AddWatched movie={movie} />
                }

            </div>
        </div>
    )
}

export default MovieCard;