import React, {useContext} from 'react';
import '../lib/font-awesome/css/all.min.css'
import {FavouritesContext} from '../contexts/FavouritesContext'

const AddFavouriteMovie = (movie) => {
    console.log('Fave movie', movie)
    const [favourites, setFavourites] = useContext(FavouritesContext)
    return (e) => {
        e.preventDefault();
        console.log(movie)
        const newFavouritesList = [...favourites, movie]
        setFavourites(newFavouritesList)
        // postFaveData(movie)
    }
}

const postFaveData = (faves) => {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(faves)
      
    };
    
    fetch("http://localhost:8000/favourites", configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        console.log(object);
      });
  }

const AddFavourites = ({movie}) => {
    
    return (
        <button className="btn favourite" onClick={AddFavouriteMovie(movie)}>
        <span>
            Add to Favourites <i className="fa fa-heart"></i>
        </span>
        </button>
    )  
}

export default AddFavourites;