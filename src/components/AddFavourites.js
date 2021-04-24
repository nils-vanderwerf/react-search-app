import React from 'react';
import {Fragment} from 'react'
import '../css/add-favourites.css'

const AddFavourites = ({handleFavouritesClick}) => {
    return (
    <>
        <span>
            Add to Favourites <i className="fa fa-heart" onClick={handleFavouritesClick}></i>
        </span>
    </>
    )  
}

export default AddFavourites;