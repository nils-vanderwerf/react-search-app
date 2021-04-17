import './App.css';
import React, { Fragment } from 'react'
import {useState, useEffect} from 'react';
import {apiKey} from './credentials/keys'

import MovieList from "./components/MovieList"
import Heading from './components/Heading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('') 
  
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
  
  
   return (
      <div className="container">
        <Heading heading ='Heading'>'Movies'</Heading>
          <div class="components-wrapper">
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
            <MovieList movies={movies} favouriteComponent={AddFavourites}/>
          </div>
        </div>
    )
}

export default App;