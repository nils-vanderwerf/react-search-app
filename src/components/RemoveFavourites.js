import React, { useContext } from 'react'
import '../lib/font-awesome/css/all.min.css'
import '../css/ButtonComponents.css'
import { FavouritesContext } from '../contexts/FavouritesContext'


const RemoveFavourites = ({ movie }) => {
    const [favourites, setFavourites] = useContext(FavouritesContext)

    const RemoveCard = (event) => {
        event.preventDefault();
        const newFavouritesList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        );
        deleteFromDB()
        setFavourites(newFavouritesList)
    }

    const deleteFromDB = () => {
        fetch(`http://localhost:8000/favourites/${movie.id}`, {
            method: "DELETE",
        })
        .then(response => response)
        .catch(error => console.log(error))
    }

    return (
        <button className="btn remove-favourite tooltip" onClick={RemoveCard} value={movie.id}>
            <span className="tooltiptext">Remove from Favourites</span>
            <span><i className="fa fa-heart"></i></span>
        </button>
    )
}

export default RemoveFavourites