import '../css/App.css';
import React, {useContext, useEffect} from 'react'
import Heading from '../components/Heading'
import MovieList from '../components/MovieList'
import {WatchListContext} from '../contexts/WatchListContext'

const WatchList = () => {
    const [watchList, setWatchList] = useContext(WatchListContext)

  const fetchWatchList = () => {
    fetch('http://localhost:8000/watchlist/')
    .then(response => response.json())
    .then(data => {
        setWatchList(data)
    }) 
    .catch(error => console.log(error))
}

  useEffect(() => {
    fetchWatchList()
    }, [] )

    return (
      <div className="main-wrapper">
          <Heading heading ='Watch List'/>
          <div className="movie-list-wrapper">
              {
              watchList ?
                  <MovieList 
                    moviesToShow={watchList}/> 
                  :
                  <p>Add movies to your watch list.</p>
              }    
          </div>
      </div>
    )
}

export default WatchList;