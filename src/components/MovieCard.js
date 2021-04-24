import React, {useState, useEffect, useContext} from 'react'
import {apiKey} from '../credentials/keys'
import AddFavourites from './AddFavourites'
import AddWatchList from './AddWatchList'
import AddWatched from './AddWatched'
import {FavouritesContext} from '../contexts/FavouritesContext'
import {MoviesContext} from '../contexts/MoviesContext'


const MovieCard = ({uniqueMovie}) => {
    const [movie, setMovie] = useState({})
    const [favourites, setFavourites] = useContext(FavouritesContext)
    const [movies, setMovies] = useContext(MoviesContext)
    useEffect(() => {
        let url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${uniqueMovie.Title}&plot=short` 
        fetch(url)
        .then(response => response.json())
        .then(data => setMovie(data))
        .catch(error => console.log(error))
    }, [])

        console.log('Movies are', movie)

    const addFavouriteMovie = (movie) => {
        return (e) => {
        e.preventDefault();
        console.log(movie)
        const newFavouritesList = [...favourites, movie]
        setFavourites(newFavouritesList)
        }
    }

    return (
        <div className="movie-card" key={movie.imdbRating}>
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
                <button className="btn favourite" onClick={addFavouriteMovie(movie)}>
                <span>
                    <AddFavourites/>
                </span>
                </button>

                <button className="btn watchlist">
                <span>
                    <AddWatchList/>
                </span>
                </button>

                <button className="btn watched">
                <span>
                    <AddWatched/>
                </span>
                </button>
            </div>
        </div> 
    )
}

export default MovieCard;