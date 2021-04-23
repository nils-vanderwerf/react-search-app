import {Link} from 'react-router-dom'
import '../css/Nav.css'

const Nav = () =>{
        return(
                <header id="nav">
                    <Link to='/'>Home</Link>
                    <Link to='/favourites'>Favourites</Link>
                    <Link to='/about'>Watched</Link>
                    <Link to='/about'>Watch List</Link>
                    <Link to='/contact'>Contact</Link>
                </header>
        )
}

export default Nav;