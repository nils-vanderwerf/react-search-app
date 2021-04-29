import '../css/App.css';
import '../css/Nav.css';
import '../css/Home.css';
import React, {useContext} from 'react'
import Heading from '../components/Heading';
import MovieList from "../components/MovieList"
import {MoviesContext} from '../contexts/MoviesContext'

const Home = () => {
  const [movies] = useContext(MoviesContext)


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