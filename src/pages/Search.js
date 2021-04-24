import '../css/App.css';
import react from 'react'
import Heading from '../components/Heading'
import SearchBox from '../components/SearchBox';
import MovieList from "../components/MovieList"


const Search = () => {
    return (
        <div class="container btn">
            <Heading heading ='Search for movies'/>
            <SearchBox/>
            <MovieList/>  
        </div>
    )
}

export default Search;