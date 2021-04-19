import {Link} from 'react-router-dom'
import '../css/Nav.css'

const Nav = () =>{
        return(
            <nav id="nav">
                <Link to='/'>Home</Link>
                <Link to='/favourites'>Favourites</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        )
}

export default Nav;