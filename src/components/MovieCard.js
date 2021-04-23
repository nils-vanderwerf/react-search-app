import React, {useState, useEffect} from 'react'
import {apiKey} from '../credentials/keys'
import AddFavourites from './AddFavourites'


const MovieCard = ({uniqueMovie}) => {
    const [movie, setMovie] = useState({})
    useEffect(() => {
        let url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${uniqueMovie.Title}&plot=short` 
        fetch(url)
        .then(response => response.json())
        .then(data => setMovie(data))
        .catch(error => console.log(error))
    }, [])

        console.log('Movies are', movie)

    return (
        <div className="movie-container" key={movie.imdbRating}>
            <div className="image-container">
                <img src={uniqueMovie.Poster} alt={uniqueMovie.Title}/>
            </div>
            <div className="card-info-container">
                <h2>{movie.Title}</h2>
                <h3>Director: {movie.Director}</h3>
                <h3>Released: {movie.Year}</h3>
                <h3>IMDB Rating: {movie.imdbRating}</h3>
                <p><strong>Plot:</strong> {movie.Plot}</p>
            </div>

            <div className="controls">
                <button className="btn favourite">
                <span>
                    Add to Favourites <i className="fa fa-heart"></i>
                </span>
                </button>

                <button className="btn watchlist">
                <span>
                    Add to Watch List <i className="fa"></i>
                </span>
                </button>

                <button className="btn watched">
                <span>
                    Add to Watched <i className="fa"></i>
                </span>
                </button>
            </div>
        </div> 
    )
}

export default MovieCard;