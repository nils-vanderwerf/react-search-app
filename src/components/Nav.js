
import '../css/Nav.css'

import {Link} from 'react-router-dom'
import SearchBox from './SearchBox'

const Nav = () =>{
        return(
         <div className="nav-container">
           <div className="search-box-container">
               <SearchBox/>
            </div>
            <div className="nav-link-container">
                <nav id="nav">
                    
                  <ul className="nav-links">
                  
                     <li>
                        <Link to='/'>Home</Link>
                     </li>

                     <li>
                        <Link to='/favourites'>Favourites</Link>
                     </li>

                     <li>
                        <Link to='/watchlist'>Watch List</Link>
                     </li>
                     
                     <li>
                        <Link to='/watched'>Watched</Link>         
                     </li>

                     
               
                  </ul>
                        
                </nav>
                </div>
            </div>

        )
}

export default Nav;