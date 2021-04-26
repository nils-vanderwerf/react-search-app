import '../css/App.css';
// import '../css/Themes.css'
import React, {useContext, useEffect} from 'react'
import Heading from '../components/Heading'
import MovieList from '../components/MovieList'
import {FavouritesContext} from '../contexts/FavouritesContext'

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

  useEffect(() => {
    fetchFavourites()
    }, [] )

    return (
      <div className="main-wrapper favourites">
      <Heading heading ='Favourites'/>
      <div className="movie-list-wrapper">
          {
              
              favourites ?
              <MovieList moviesToShow={favourites}/> :
              <p>Add movies to your favourites.</p>
          }
          
      </div>
  </div>
    )
}

export default Favourites;