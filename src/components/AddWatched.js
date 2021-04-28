import React, {useContext} from 'react';
import '../lib/font-awesome/css/all.min.css'
import {WatchedContext} from '../contexts/WatchedContext'


const AddWatched = ({movie}) => {

  const [watched, setWatched] = useContext(WatchedContext)

    const AddToWatchedDB = (event) => {
          event.preventDefault();
          const newWatchedList = [...watched, movie]
          setWatched(newWatchedList)
          postWatchedData()
          //If its watched, it doesn't need to be in the watchlist any more
          deleteFromWatchList()
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
        
    fetch("http://localhost:8000/watched", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(data => {
          console.log(data);
        });
      }

      const deleteFromWatchList = () => {
        
        fetch(`http://localhost:8000/watchlist/${movie.id}`, {
                method: "DELETE",
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(object) {
                console.log(object);
            });
        }

    return (
      <button className="btn add-watched tooltip" onClick={AddToWatchedDB} value={movie.id}>
          <span class="tooltiptext">Add to Watched</span>
          <span><i className="fa fa-eye"></i></span>
      </button>
    )  
}

export default AddWatched;