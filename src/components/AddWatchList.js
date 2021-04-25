import React, {useContext} from 'react';
import '../lib/font-awesome/css/all.min.css'
import {WatchListContext} from '../contexts/WatchListContext'

const AddToWatchList = (movie) => {
    console.log('Watchlist movie', movie)
    const [watchList, setWatchList] = useContext(WatchListContext)
    return (e) => {
        e.preventDefault();
        const newWatchList = [...watchList, movie]
        console.log('newWatchList:', newWatchList)
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
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            console.log(object);
    });
    }

const AddWatchList = ({movie}) => {
    return (
        <button className="btn favourite" onClick={AddToWatchList(movie)}>
            <span>
                Add to Watch List <i className="fa fa-eye"></i>
            </span>
        </button>
    )  
}

export default AddWatchList;