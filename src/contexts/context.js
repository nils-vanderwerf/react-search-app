import React, {useState, createContext} from "react"
const [movies, setMovies] = useState([])
const MovieContext = createContext(movies)
