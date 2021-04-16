import React from 'react'

const MovieList = (props) => {
    
    return (
        <div className="movieList">
        {props.movies.map((movie, index) => (
            <div class="movieContainer" key={movie}>
                <img src={movie.Poster} alt={movie}/>
            </div>
        ))}
        </div>
    )
}

export default MovieList;