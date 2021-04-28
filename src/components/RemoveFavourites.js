import React, {useContext} from 'react'
import '../lib/font-awesome/css/all.min.css'
import '../css/ButtonComponents.css'
import {FavouritesContext} from '../contexts/FavouritesContext'


const RemoveFavourites = ({movie}) => {
    const [favourites, setFavourites] = useContext(FavouritesContext)

    const RemoveCard = (event) => {
        event.preventDefault();   
        const newFavouritesList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
          );
        setFavourites(newFavouritesList)
        deleteFromDB()
        }

    const deleteFromDB = () => {

        fetch(`http://localhost:8000/favourites/${movie.id}`, {
            method: "DELETE",
            })
            .then(function(response) {
            return response.json();
            })
            .then(function(object) {
            console.log(object);
            });
        }

    return (
        <button className="btn remove-favourite tooltip" onClick={RemoveCard} value={movie.id}>
            <span class="tooltiptext">Remove from Favourites</span>
            <span><i className="fa fa-heart"></i></span>
        </button>
    )
}

export default RemoveFavourites