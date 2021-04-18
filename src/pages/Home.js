import '../css/App.css';
import '../css/Home.css';
import React, { Fragment } from 'react'
import {useState, useEffect} from 'react'

import {apiKey} from '../credentials/keys'

import MovieList from "../components/MovieList"
import Heading from '../components/Heading';
import AddFavourites from '../components/AddFavourites';
import SearchBox from '../components/SearchBox'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [favourites, setFavourites] = useState([])
  const [query, setQuery] = useState('')

  
  const getMovies = () => {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}&plot=short`

    fetch(url)
   .then(response => response.json())
   .then(data => {
     console.log(data)
      if (data.Search) {
        let titles = data.Search.map(key => key.Title)
        getMoreData(titles)
      } else {
        return null
      }
    })
    .catch(error => console.error(error))
   
  }

  const getMoreData = (titles) => {
    console.log(titles)
    titles.map(thisTitle => {
      let secondUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${thisTitle}&plot=short` 
      fetch(secondUrl)
      .then(response => response.json())
      .then(data => setMovies([...movies, data]))
      .catch(error => console.log(error))
  }
  )}

    useEffect(() => {
      getMovies();
    }, [query]); //called when the state updates
 
  // getSetQuery = (query) => {
  //   useEffect(() => {
  //     getMovies(query);
  //   }, [query]); //called when the state updates
  // }
  
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
          <div class="search">
          <Heading heading ='Search for a film'/>

            <SearchBox searchValue={query} setQuery={setQuery}/>
            
          </div>
          <div class="main-wrapper movie-app">
            <Heading heading ='Movies'/>
            <div class="row">
            <MovieList 
            movies={movies} 
            handleFavouritesClick={addFavouriteMovie} 
            favouriteComponent={AddFavourites}/>
            </div>
            <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie}/>
          </div>
        </div>
    )
   }

export default Home;