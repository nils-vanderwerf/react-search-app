import '../css/App.css';
import React, {useContext} from 'react'
import Heading from '../components/Heading'
import {FavouritesContext} from '../contexts/FavouritesContext'
import MovieList from '../components/MovieList'
import AddFavourites from '../components/AddFavourites';



const Favourites = () => {
    const [favourites, setFavourites] = useContext(FavouritesContext)

    const addFavouriteMovie = (movie) => {
    
        const newFavouritesList = [...favourites, movie]
        setFavourites(newFavouritesList)
    }
    return (
        <div class="favourites-container">
            <Heading heading ='Favourites'/>
            <MovieList movies={favourites} favouriteComponent={AddFavourites} handleFavouritesClick={addFavouriteMovie}/>  
        </div>
    )
}

export default Favourites;