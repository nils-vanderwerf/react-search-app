import React, { useContext } from 'react';
import '../lib/font-awesome/css/all.min.css'
import { WatchedContext } from '../contexts/WatchedContext'

const AddWatched = ({ movie }) => {

  const [watched, setWatched] = useContext(WatchedContext)

  const AddToWatchedDB = (event) => {
    event.preventDefault();
    const movieIsInWatched = watched.find(element =>
      element.imdbID === movie.imdbID)
    if (movieIsInWatched) {
      return null
    }
    else {
      const newWatchedList = [...watched, movie]
      movie.id = movie.imdbID //sets the id to the imbD so it can be deleted later
      setWatched(newWatchedList)
      postWatchedData()
      //If its watched, it doesn't need to be in the watchlist any more
      deleteFromWatchList()
    }
  }

  const postWatchedData = () => {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(movie)

    };

    fetch("https://localhost:3001/watched", configObj)
    .then(response => response)
  }

  const deleteFromWatchList = () => {

    fetch(`https://localhost:8000/watchlist/${movie.id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
  }

  return (
    <button className="btn add-watched tooltip"
      onClick={AddToWatchedDB} value={movie.id}>
      <span class="tooltiptext">Add to Watched</span>
      <span><i className="fa fa-eye"></i></span>
    </button>
  )
}

export default AddWatched;