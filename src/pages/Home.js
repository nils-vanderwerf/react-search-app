import '../css/App.css';
import '../css/Home.css';
import React from 'react'
import MovieList from "../components/MovieList"
import Heading from '../components/Heading';

const Home = () => {
   return (

    <div class="main-wrapper">
      <Heading heading ='Movies'/>
      <MovieList/>  
    </div>

    )
}

export default Home;