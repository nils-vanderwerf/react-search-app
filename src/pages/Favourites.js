import '../css/App.css';
import React, {useContext, useEffect} from 'react'
import Heading from '../components/Heading'
import {FavouritesContext} from '../contexts/FavouritesContext'
import MovieList from '../components/MovieList'
import AddFavourites from '../components/AddFavourites';



const Favourites = () => {
    const [favourites, setFavourites] = useContext(FavouritesContext)

    const fetchFavourites = () => {
        fetch('http://localhost:8000/favourites/')
        .then(response => response.json())
        .then(data => {
            setFavourites(data)
        }) 
        .catch(error => console.log(error))
  }

  useEffect(fetchFavourites, [])


    return (
        <div class="favourites-container">
            <Heading heading ='Favourites'/>
            <MovieList movies={favourites}/>  
        </div>
    )
}

export default Favourites;