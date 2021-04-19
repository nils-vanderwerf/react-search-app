import React, {useEffect} from 'react'
import AddFavourites from './AddFavourites'

function MovieList (props) {
    console.log('movies:', props.movies)
    if (props.movies.length !== 0) {
    return (
        <div className="movie-list">
            {props.movies.map((movie, index) => {
                //Check if there is no poster available
                return (movie.Poster !== 'N/A') ?
                <div className="movie-container" key={index}>
                    <div className="image-container">
                        <img src={movie.Poster} alt={movie.Title}/>
                        <div className="overlay" onClick={() => props.handleFavouritesClick(movie)} >
                            <AddFavourites/>
                        </div>
                    </div>
                    <div className="card-info-container">
                        <h2>{movie.Title}</h2>
                        <h3>Director: {movie.Director}</h3>
                        <h3>Realesed: {movie.Year}</h3>
                        <h3>IMDB Rating: {movie.imdbRating}</h3>
                        <p><strong>Plot:</strong> {movie.Plot}</p>
                    </div>
                </div> 
                :
                null
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