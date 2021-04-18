import './App.css';
import React, { Fragment } from 'react'
import {useState, useEffect} from 'react';
import {apiKey} from './credentials/keys'
import {BrowserRouter as Router, Route} from 'react-dom'

import MovieList from "./components/MovieList"
import Heading from './components/Heading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites'

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favourites, setFavourites] = useState([]) 
  
  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchValue}&plot=short`

    const response = await fetch(url)
    const data = await response.json().catch(error => console.log(error))
    console.log(data)
    
    if (data.Search) {
      
      setMovies(data.Search)

    } else {
      return (
      <Fragment>
        <p>No results for this search</p>
      </Fragment>
      )
    }
  }
  
  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]); //called when the state updates
  
  const addFavouriteMovie = (movie) => {
    const newFavouritesList = [...favourites, movie]
    setFavourites(newFavouritesList)
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouritesList = 
    favourites.filter((faveMovie) => faveMovie.imdbID !== movie.imdbID)

    setFavourites(newFavouritesList);

  }
  
   return (
      <div className="container">
        <Heading heading ='Movies'/>
          <div class="components-wrapper">
            <div className="search-favourites">
              <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
              <Heading heading ='Favourites'/>
              <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent={RemoveFavourites}/>
            </div>
            <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} favouriteComponent={AddFavourites}/>
          </div>
        </div>
    )
}

export default App;