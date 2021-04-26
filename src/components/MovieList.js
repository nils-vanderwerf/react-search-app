import MovieCard from './MovieCard'
import '../css/MovieList.css'

function MovieList({moviesToShow: movies}){

    if (movies.length > 0) {
    return (
        <div className="container">
            <div className="movie-list">
                {movies.map((movie, index) => {
                    //Check if there is no poster available
                    return (movie.Poster !== 'N/A') ? 
                    <MovieCard key={movie.Title}  movie={movie}/> 
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