import React, {useContext} from 'react';
import '../lib/font-awesome/css/all.min.css'
import {WatchedContext} from '../contexts/WatchedContext'


const AddWatchedMovie = (movie) => {
    console.log('Watched movie', movie)
    const [watched, setWatched] = useContext(WatchedContext)
    return (e) => {
        e.preventDefault();
        const newWatchedList = [...watched, movie]
        setFavourites(newWatchedList)
        postWatchedData(movie)
    }
}

const postWatchedData = (watchedFilms) => {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(watchedFilms)
      
    };
    
    fetch("http://localhost:8000/watched", configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        console.log(object);
      });
  }

const AddWatched = ({watched}) => {
    
    return (
        <button className="btn favourite" onClick={AddWatchedMovie(movie)}>
        <span>
            Add to Favourites <i className="fa fa-heart"></i>
        </span>
        </button>
    )  
}

export default AddWatched;