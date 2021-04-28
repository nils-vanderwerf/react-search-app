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
    <div class="main-wrapper">
        <Heading heading ='Search for movies' color="rgb(27, 171, 228)"/>
          <div className="movie-list-wrapper">
            <MovieList moviesToShow={movies}/>
        </div>
    </div>

    )
}

export default Home;