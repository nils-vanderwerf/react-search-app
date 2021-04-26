import React, {useContext} from 'react';
import '../lib/font-awesome/css/all.min.css'
import {WatchedContext} from '../contexts/WatchedContext'


const AddWatched = ({movie}) => {

  const [watched, setWatched] = useContext(WatchedContext)

    const AddToWatchedDB = (event) => {
          event.preventDefault();
          const newWatchedList = [...watched, movie]
          setWatched(newWatchedList)
          postWatchedData(movie)
        }

const postWatchedData = (watchedFilms) => {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(watchedFilms)
      
    };
    
    fetch("http://localhost:8000/watched", configObj)
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });
  }

    return (
      <button className="btn watchlist tooltip" onClick={AddToWatchedDB} value={movie.id}>
          <span class="tooltiptext">Add to Watched</span>
          <span><i className="fa fa-check"></i></span>
      </button>
    )  
}

export default AddWatched;