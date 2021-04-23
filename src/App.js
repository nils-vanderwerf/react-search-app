import React, {useState, useEffect, useContext} from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './pages/Home'
import Favourites from './pages/Favourites'
// import MovieContext from "./contexts/MovieContext"
import Nav from './components/Nav'

import {apiKey} from './credentials/keys'

import {MoviesContext} from './contexts/MoviesContext'
import {QueryContext} from './contexts/QueryContext'
import {FavouritesContext} from './contexts/FavouritesContext'

import SideBar from './components/SideBar'



const App = () => {
  const [query, setQuery] = useContext(QueryContext)  
  const [movies, setMovies] = useContext(MoviesContext)
  const [favourites, setFavourites] = useContext(FavouritesContext)    

  // const [searchQuery, setSearchQuery] = useState('')

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

  // useEffect(() => {
  //   setSearchQuery(query)
  // }, []); //called when the state updates   

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
        <div className="main-content">
     
            <Router>
                <Nav/>
                <SideBar/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Favourites" component={Favourites}/>
          
            </Router>
            
          </div>
      </div>
   )

}

export default App;