import React, { useContext } from 'react'
import '../lib/font-awesome/css/all.min.css'
import '../css/ButtonComponents.css'
import { WatchListContext } from '../contexts/WatchListContext'


const MoveFromWatchList = ({ movie }) => {
    const [watchList, setWatchList] = useContext(WatchListContext)

    const RemoveCard = (event) => {
        event.preventDefault();
        const newWatchList = watchList.filter(
            (item) => item.imdbID !== movie.imdbID
        );
        setWatchList(newWatchList)
        deleteFromDB()
    }

    const deleteFromDB = () => {

        fetch(`http://localhost:8000/watchlist/${movie.imdbID}`, {
            method: "DELETE",
        })
        .then(response => response)
        .catch(error => console.log(error))
    }

    return (
        <button className="btn tooltip green-list" onClick={RemoveCard} value={movie.id}>
            <span class="tooltiptext">Remove from Watch List</span>
            <span><i className="fa fa-list"></i></span>
        </button>
    )
}

export default MoveFromWatchList