import React, {useContext} from 'react';
import '../lib/font-awesome/css/all.min.css'
import {WatchListContext} from '../contexts/WatchListContext'

const AddWatchList = ({movie}) => {

    const [watchList, setWatchList] =  useContext(WatchListContext)

        const AddToWatchListDB = (event) => {
            event.preventDefault();
            const newWatchList = [...watchList, movie]
            setWatchList(newWatchList)
            postWatchListData(movie)
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
                .then(data => {
                    console.log(data)
            });
            }

            return (
                <button className="btn watchlist tooltip" onClick={AddToWatchListDB} value={movie.id}>
                    <span class="tooltiptext">Add to Watch List</span>
                    <span><i className="fa fa-eye"></i></span>
                </button>
            )  
}

export default AddWatchList;