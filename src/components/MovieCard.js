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
        <div className="movie-container" key={uniqueMovie.Title}>
            <div className="image-container">
                <img src={uniqueMovie.Poster} alt={uniqueMovie.Title}/>
                <div className="overlay" >
                    <AddFavourites/>
                </div>
            </div>
            <div className="card-info-container">
                <h2>{uniqueMovie.Title}</h2>
                <h3>Director: {uniqueMovie.Director}</h3>
                <h3>Released: {uniqueMovie.Year}</h3>
                <h3>IMDB Rating: {uniqueMovie.imdbRating}</h3>
                <p><strong>Plot:</strong> {uniqueMovie.Plot}</p>
            </div>
        </div> 
    )
}

export default MovieCard;