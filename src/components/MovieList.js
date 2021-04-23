import React, {useEffect, useContext} from 'react'
import AddFavourites from './AddFavourites'
import MovieCard from './MovieCard'
import {MoviesContext} from '../contexts/MoviesContext'

function MovieList(){
    const [movies, setMovies] = useContext(MoviesContext)
    console.log('movies:', movies)

    useEffect(() => console.log(movies), [])
    if (movies.length !== 0) {
    return (
        <div className="movie-list">
            {movies.map((movie, index) => {
                //Check if there is no poster available
                return (movie.Poster !== 'N/A') ? 
                <MovieCard key={movie.Title}  uniqueMovie={movie} index={index}/> 
                : 
                <div className="filler-poster" />
            })  
            }
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