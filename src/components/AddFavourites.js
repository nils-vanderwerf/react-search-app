import React, {useContext} from 'react';
import '../lib/font-awesome/css/all.min.css'
import '../css/ButtonComponents.css'
import {FavouritesContext} from '../contexts/FavouritesContext'

const AddFavourites = ({movie}) => {

  const [favourites, setFavourites] = useContext(FavouritesContext)

    const AddToFavouritesDB = (event) => {
            event.preventDefault();
            const newFavesList = [...favourites, movie]
            setFavourites(newFavesList)
            postFaveData(movie)
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
        
        fetch("http://localhost:8000/favourites", configObj)
          .then(function(response) {
            return response.json();
          })
          .then(function(object) {
            console.log(object);
          });
      }

      // if (
      //   movie is already favourited or user clicks on remove
      //   delete or add to 
      // )


    return (
        <button className="btn favourite tooltip" onClick={AddToFavouritesDB} value={movie.id}>
            <span class="tooltiptext">Add to Favourites</span>
            <span><i className="fa fa-heart"></i></span>
        </button>

    )  
}

export default AddFavourites;