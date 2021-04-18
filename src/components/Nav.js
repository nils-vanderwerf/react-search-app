import {Link} from 'react-router-dom'

const Nav = () =>{
        return(
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/favourites'>Favourites</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        )
}

export default Nav;