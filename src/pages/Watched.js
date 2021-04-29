import '../css/App.css';
import React, {useContext, useEffect} from 'react'
import Heading from '../components/Heading'
import {WatchedContext} from '../contexts/WatchedContext'
import MovieList from '../components/MovieList'

const Watched = () => {
    
    const [watched, setWatched] = useContext(WatchedContext)

    const fetchWatched = () => {
        fetch('http://localhost:8000/watched/')
        .then(response => response.json())
        .then(data => {
            setWatched(data)
        }) 
        .catch(error => console.log(error))
    }
    
      useEffect(() => {
          fetchWatched() 
      }, [])

    return (
        <div className="main-wrapper">
            <Heading heading ='Watched'/>
        <div className="movie-list-wrapper">
            {  
                watched ?
                <MovieList 
                    moviesToShow={watched}/> 
                :
                <p>Add movies you've watched.</p>
            }
            
        </div>
    </div>
    )
}

export default Watched;