import React, {useContext} from 'react'
import '../lib/font-awesome/css/all.min.css'
import '../css/ButtonComponents.css'
import {WatchedContext} from '../contexts/WatchedContext'


const RemoveFromWatched = ({movie}) => {
    const [watched, setWatched] = useContext(WatchedContext)

    const RemoveCard = (event) => {
        event.preventDefault();   
        const newWatched = watched.filter(
            (item) => item.imdbID !== movie.imdbID
          );
        setWatched(newWatched)
        deleteFromDB()
        }

    const deleteFromDB = () => {
        
        fetch(`http://localhost:8000/watched/${movie.id}`, {
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
        <button className="btn tooltip green-watched" onClick={RemoveCard} value={movie.id}>
            <span class="tooltiptext">Remove from Watched</span>
            <span><i className="fa fa-eye"></i></span>
        </button>
    )
}

export default RemoveFromWatched;