import '../css/App.css';
import React from 'react'
import Heading from './Heading'
import SearchBox from './SearchBox';
import MovieList from './MovieList'
import RemoveFavourites from './RemoveFavourites'

const SideBar = () => {
    return (
        <div class="components-wrapper">
            <div className="search-favourites">
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
                <Heading heading ='Favourites'/>
                <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent={RemoveFavourites}/>
            </div>
        </div>
    )
}

export default SideBar