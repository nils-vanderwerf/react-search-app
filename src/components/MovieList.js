import React, {useEffect} from 'react'
import AddFavourites from './AddFavourites'
import MovieCard from './MovieCard'

function MovieList (props) {
    console.log('movies:', props.movies)
    if (props.movies.length !== 0) {
    return (
        <div className="movie-list">
            {props.movies.map((movie, index) => {
                //Check if there is no poster available
                return (movie.Poster !== 'N/A') ? <MovieCard key={movie.Title}  uniqueMovie={movie} index={index}/> : null
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