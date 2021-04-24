import '../css/App.css';
import '../css/Home.css';
import React, {useContext} from 'react'
import MovieList from "../components/MovieList"
import Heading from '../components/Heading';
import AddFavourites from "../components/AddFavourites"
import FavouritesContext from '../contexts/FavouritesContext'
import {MoviesContext} from '../contexts/MoviesContext'

const Home = () => {
  const [movies, setMovies] = useContext(MoviesContext)
  return (

    <div class="main-wrapper">
      <Heading heading ='Search for movies'/>
      <MovieList movies={movies}/>  
    </div>

    )
}

export default Home;