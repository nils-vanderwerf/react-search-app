import '../css/App.css'
import '../css/MovieCard.css'
import AddFavourites from './AddFavourites'
import AddWatchList from './AddWatchList'
import AddWatched from './AddWatched'

const MovieCard = ({movie}) => {
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
                    <AddFavourites movie={movie}/>
                    <AddWatchList movie={movie}/>
                    <AddWatched movie={movie}/>
            </div>
        </div> 
    )
}

export default MovieCard;