import './App.css';
import React from 'react'
import {useState, useEffect} from 'react';
import MovieList from "./components/MovieList"

import {apiKey} from './credentials/keys'

const App = () => {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=finding nemo`
  
    fetch(url, {
      "Content-Type": "application/json",
      "Accept": "application/json"
    })
    .then(response => response.json())
    .then(data => console.log(data))
  } 
  
  useEffect(() => {
    getMovies()
  }, []); //called when the page loads
  
  
   return (
      <div className="container">
        <h1>Movie Search</h1>
        <MovieList movies={movies}/>
        </div>
    )
}

export default App;