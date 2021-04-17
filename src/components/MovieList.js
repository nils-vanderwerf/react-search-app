import React from 'react'

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <div className="movie-list">
            
            {props.movies.map((movie, index) => {
                //Check if there is no poster available
                return (movie.Poster !== 'N/A') ?
                <div className="movie-container" key={index}>
                    <div className="image-container">
                        <img src={movie.Poster} alt={movie.Title}/>
                        <div className="overlay">
                            <FavouriteComponent />
                        </div>
                    </div>
                    <div className="card-info-container">
                        <h2>{movie.Title}</h2>
                    </div>
                </div> 
                :
                null
            })  
            }
        </div>
 
        )
        
    }

export default MovieList;