import './App.css';
import React from 'react'
import {useState, useEffect} from 'react';
import MovieList from "./components/MovieList"

import {apiKey} from './credentials/keys'
import Heading from './components/Heading';
import SearchBox from './components/Searchbox';

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('') 
  
  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchValue}`

    const response = await fetch(url)
    const data = await response.json().catch(error => console.log(error))


    if (data.Search) {
      console.log('winning')
      setMovies(data.Search)
    }
  }
  
  
  useEffect(() => {
    getMovies(searchValue)
  }, [searchValue]); //called when the state updates
  
  
   return (
      <div className="container">
        <Heading heading ='Heading'>'Movies'</Heading>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        <MovieList movies={movies}/>
        </div>
    )
}

export default App;