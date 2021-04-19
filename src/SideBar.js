import React from 'react'
import SearchBox from './components/SearchBox'
import Heading from './Heading'
import MovieList from './components/MovieList'

    const SideBar = () => {
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        <Heading heading ='Favourites'/>
        <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent={RemoveFavourites}/>
    }

    export default SideBar;