import React, { useContext } from 'react';
import '../lib/font-awesome/css/all.min.css'
import { WatchListContext } from '../contexts/WatchListContext'

const AddWatchList = ({ movie }) => {

    const [watchList, setWatchList] = useContext(WatchListContext)

    const addToWatchList = (event) => {
        event.preventDefault();
        const movieIsInWatched = watchList.find(element =>
            element.imdbID === movie.imdbID)
        if (movieIsInWatched) {
            return null
        }
        else {
            const newWatchList = [...watchList, movie]
            movie.id = movie.imdbID //sets the id to the imbD so it can be deleted later
            setWatchList(newWatchList)
            postWatchListData(movie)
        }
    }

    const postWatchListData = (watchList) => {
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(watchList),
        };

        fetch("http://localhost:8000/watchlist", configObj)
            .then(function (response) {
                return response.json();
            })
            .then(data => {
                console.log(data)
            });
    }

    return (
        <button className="btn add-watchlist tooltip" onClick={addToWatchList} value={movie.id}>
            <span className="tooltiptext">Add to Watch List</span>
            <span><i className="fa fa-list"></i></span>
        </button>
    )
}

export default AddWatchList;