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
     console.log('less data', data)
      if (data.Search) {
        setMovies(data.Search)
      } else {
        return null
      }
    })
    .catch(error => console.error(error))
   
  }

  // const getMoreData = (titles) => {
  //   console.log(titles)
  //   titles.map(thisTitle => {
  //     let secondUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${thisTitle}&plot=short` 
  //     fetch(secondUrl)
  //     .then(response => response.json())
  //     .then(data => setMovies([data]))
  //     .catch(error => console.log(error))
  // }
  // )}

    useEffect(() => {
      getMovies();
    }, [query]); //called when the state updates

  
  const addFavouriteMovie = (movie) => {
    const newFavouritesList = [...favourites, movie]
    setFavourites(newFavouritesList)
  }

  const removeFavouriteMovie = (movie) => {
    const itemsToKeep = 
    favourites.filter((faveMovie) => faveMovie.imdbID !== movie.imbdID)
    setFavourites(itemsToKeep);
    console.log(movie.imdbID)
    deleteData(movie)
  }

  const postData = (faves) => {
    
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(faves)
    };
    
    fetch("http://localhost:3000/faveMovies", configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        console.log(object);
      });
  }



  const deleteData = movie =>  {
  fetch(`http://localhost:3000/faveMovies/q=${movie.imdbID}`, {
      method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }})
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    });
  }
  
   return (

      <div className="container">
          <div class="sidebar">
          <Heading heading ='Search for a film'/>

            <SearchBox searchValue={query} setQuery={setQuery}/>
            <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie}/>
            
          </div>
          <div class="main-wrapper">
            <Heading heading ='Movies'/>
            <MovieList 
              movies={movies} 
              handleFavouritesClick={addFavouriteMovie} 
              favouriteComponent={AddFavourites}/>
             
          </div>
        </div>
    )
   }

export default Home;