
import './css/App.css'
import React, {useState, useEffect, useContext} from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './components/Nav'

import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Search from './pages/Search'
import Watched from './pages/Watched'
import WatchList from './pages/WatchList'


import {apiKey} from './credentials/keys'

import {MoviesContext} from './contexts/MoviesContext'
import {QueryContext} from './contexts/QueryContext'
import {FavouritesContext} from './contexts/FavouritesContext'
import {WatchedContextProvider} from './contexts/WatchedContext'
import {WatchListContextProvider} from './contexts/WatchedContext'
import './lib/font-awesome/css/all.min.css'
import SideBar from './components/SideBar'

const App = () => {
  const [query, setQuery] = useContext(QueryContext)  
  const [movies, setMovies] = useContext(MoviesContext)
  const [favourites, setFavourites] = useContext(FavouritesContext)    

  const GetMovies = () => {

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

      useEffect(() => {
        GetMovies();
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
    <div className="app-container">
          
            <Router>
                <div className="nav">   
                  <Nav/>
                </div>
                <div className="main-content">
                  <Route exact path="/">
                    <Home/>
                  </Route>

                  <Route exact path="/favourites" component={Favourites}>
                    <Favourites/>
                  </Route>
                  
                  <Route exact path="/watched">
                    <Watched/>
                  </Route>

                  <Route exact path="/watchlist">
                    <WatchList/>
                  </Route>
                </div>

            </Router>
          </div>
   )

}

export default App;