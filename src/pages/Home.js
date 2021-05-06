import '../css/App.css';
import '../css/Nav.css';
import '../css/Home.css';
import React, {useContext, useEffect} from 'react'
import Heading from '../components/Heading';
import MovieList from "../components/MovieList"
import {MoviesContext} from '../contexts/MoviesContext'
import {QueryContext} from '../contexts/QueryContext'

const Home = (props) => {
  const [movies] = useContext(MoviesContext)
  const [query, setQuery] = useContext(QueryContext)

    console.log(props)

  useEffect(() => {
    setQuery("Avengers")
  }, []); 

  return (
    <div className="main-wrapper">
        <Heading heading ='Search for movies' />
          <div className="movie-list-wrapper">
            <MovieList moviesToShow={movies}/>
        </div>
    </div>

    )
}

export default Home;