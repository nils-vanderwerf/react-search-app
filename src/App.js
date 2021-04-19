import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './pages/Home'
import Favourites from './pages/Favourites'
// import MovieContext from "./contexts/MovieContext"
import Nav from './components/Nav'

const App = () => {

   return (
    <div className="app-container">
    
        <div className="main-content">
            {/* <MovieContext.Provider value={{movies, setMovies}}> */}
            <Router>
              <Nav/>
              <Route exact path="/" component={Home}/>
              <Route exact path="/Favourites" component={Favourites}/>

            </Router>

            {/* </MovieContext.Provider> */}
          </div>
      </div>
   )
}

export default App;