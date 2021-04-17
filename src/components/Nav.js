import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
        <ul className="nav">
            <Link to='/'>Home</Link>
            <Link to='/Favourites'>Favourites</Link>
            <Link to='/About'>About</Link>
            <Link to='/Contact'>Contact</Link>
        </ul>
        </nav>
    )
} 

export default Nav;