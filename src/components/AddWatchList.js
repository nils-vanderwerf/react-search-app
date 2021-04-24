import React from 'react';
import {Fragment} from 'react'
import '../lib/font-awesome/css/all.min.css'

const AddWatchList = ({handleFavouritesClick}) => {
    return (
    <>
        <span>
            Add to Watch List <i className="fa fa-eye" onClick={handleFavouritesClick}></i>
        </span>
    </>
    )  
}

export default AddWatchList;