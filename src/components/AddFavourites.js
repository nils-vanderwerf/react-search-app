import React, {useContext} from 'react';
import '../lib/font-awesome/css/all.min.css'
import '../css/ButtonComponents.css'
import {FavouritesContext} from '../contexts/FavouritesContext'

const AddFavourites = ({movie}) => {

  const [favourites, setFavourites] = useContext(FavouritesContext)
  
  const addToFaves = (event) => {
      event.preventDefault();  
      const movieIsFave = favourites.find(element => 
        element.imdbID === movie.imdbID)
      if (movieIsFave) {
        return null
      } 
      else {
        const newFavesList = [...favourites, movie]
        movie.id = movie.imdbID //sets the id to the imbD so it can be deleted later
        setFavourites(newFavesList)
        postFaveData(movie)
      }
    }

    const postFaveData = (faveFilms) => {
        let configObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(faveFilms)
          
        };
        
        fetch(`http://localhost:8000/favourites`, configObj)
        .then(response => response.json())
        .then(data => console.log(data))
      }

    return (
        <button className="btn favourite tooltip" onClick={addToFaves} value={movie.id}>
            <span class="tooltiptext">Add to Favourites</span>
            <span><i className="fa fa-heart"></i></span>
        </button>
    )  
}

export default AddFavourites;