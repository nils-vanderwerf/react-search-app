import MovieCard from './MovieCard'
import '../css/MovieList.css'
import React, {useContext} from 'react'
import {FavouritesContext} from '../contexts/FavouritesContext'
import {WatchedContext} from '../contexts/WatchedContext'
import {WatchListContext} from '../contexts/WatchListContext'

function MovieList({moviesToShow: movies}){

    const [favourites, setFavourites] = useContext(FavouritesContext)


    if (movies.length > 0) {
    return (
        <div className="container">
            <div className="movie-list">
                {movies.map((movie, index) => {
                    //Check if there is no poster available
                    return (movie.Poster !== 'N/A') ? 
                    <MovieCard
                        id={index+1} 
                        key={movie.imdbID}  
                        movie={movie}
                        />
                    : 
                    null;
                })  
                }
            </div>
        </div>
 
        )
    } else {
        return (
        <>
            <p>No results to show</p>
        </>
      )
    }
        
    }

export default MovieList;