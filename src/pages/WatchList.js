import '../css/App.css';
import React, {useContext} from 'react'
import Heading from '../components/Heading'
import MovieList from '../components/MovieList'
import {WatchListContext} from '../contexts/WatchListContext'

const WatchList = () => {
  const [watchList, setWatchList] = useContext(WatchListContext)
    return (
        <div class="watch-list-container">
            <Heading heading ='Watch List'/>
            <MovieList movies={watchList}/>
        </div>
    )
}

export default WatchList;