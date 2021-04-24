import React from 'react';
import {Fragment} from 'react'

const AddWatchList = ({handleFavouritesClick}) => {
    return (
    <>
        <span>
            Add to Watched <i className="fa fa-check" onClick={handleFavouritesClick}></i>
        </span>
    </>
    )  
}

export default AddWatchList;