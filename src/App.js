
import './css/App.css'

import React, {useEffect, useContext} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Nav from './components/Nav'

import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Watched from './pages/Watched'
import WatchList from './pages/WatchList'

import {apiKey} from './credentials/keys'

import {MoviesContext} from './contexts/MoviesContext'
import {QueryContext} from './contexts/QueryContext'
import './lib/font-awesome/css/all.min.css'

const App = () => {
  const [query, setQuery] = useContext(QueryContext) 
  const [movies, setMovies] = useContext(MoviesContext) 

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

   return (
      <div className="app-container">
          
          <Router>
              <div className="nav">   
                <Nav/>
              </div>
              <div className="main-content">
                  <Route 
                      exact path="/" 
                      component={Home}/>
                  <Route 
                      exact path="/favourites" 
                      component={Favourites}/>
                  <Route 
                      exact path="/watchlist" 
                      component={WatchList}>
                  </Route>
                  <Route 
                    exact path="/watched"
                    component={Watched}>
                  </Route>
              </div>
          </Router>
            
      </div>
   )

}

export default App;