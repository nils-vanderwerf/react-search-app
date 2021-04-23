import React, {createContext, useState} from "react"
const MoviesContext = createContext()

const MoviesContextProvider = (props) => {
    const [movies, setMovies] = useState([])
    
    return (
        <MoviesContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MoviesContext.Provider>
    )
    
}

export {MoviesContext, MoviesContextProvider};
