import React, {useState, useEffect, useContext} from 'react'
import {apiKey} from '../credentials/keys'
import AddFavourites from './AddFavourites'
import AddWatchList from './AddWatchList'
import AddWatched from './AddWatchList'

import {MoviesContext} from '../contexts/MoviesContext'


const MovieCard = ({uniqueMovie}) => {
    const [movie, setMovie] = useState({})

    const [url, setURL] = useState('')

    // const [movies, setMovies] = useContext(MoviesContext)
    // const [watched, setWatched] = useContext(WatchedContext)
    // const [watchList, setWatchList] = useContext(WatchListContext)

    useEffect(() => {
        let url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${uniqueMovie.Title}&plot=short` 
        fetch(url)
        .then(response => response.json())
        .then(data => setMovie(data))
        .catch(error => console.log(error))
    }, [])


    return (
        <div className="movie-card" key={movie.imdbID}>
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
                    <AddFavourites movie={movie}/>
                    <AddWatchList movie={movie}/>
                    <AddWatched movie={movie}/>
            </div>
        </div> 
    )
}

export default MovieCard;