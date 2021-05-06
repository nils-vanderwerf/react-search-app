import '../css/Nav.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBox from './SearchBox'

const Nav = () => {
   return (
      <div className="nav-container">
         <div className="search-box-container">
            <SearchBox />
         </div>
         <div className="nav-link-container">
            <nav id="nav">
               <ul className="nav-links">
                  <li>
                     <NavLink exact
                        className="home link-item"
                        to='/'
                        activeClassName="selected"
                     >Home
                     </NavLink>
                  </li>

                  <li>
                     <NavLink exact
                        className="favourites link-item"
                        to='/favourites'
                        activeClassName="selected">
                        Favourites
                     </NavLink>
                  </li>

                  <li>
                     <NavLink exact
                        className="watchlist link-item"
                        to='/watchlist'
                        activeClassName="selected">
                        Watch List
                     </NavLink>
                  </li>

                  <li>
                     <NavLink exact
                        className="watched link-item"
                        to='/watched'
                        activeClassName="selected">
                        Watched
                     </NavLink>
                  </li>

               </ul>

            </nav>
         </div>
      </div>

   )
}

export default Nav;