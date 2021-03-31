import './../styles/NavBar.css';
import { Link } from 'react-router-dom';

const Nav = () => (
    <nav>
        <ul className="nav-links">
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/agents'>
                <li>Agents</li>
            </Link>
            <Link to='/maps'>
                <li>Maps</li>
            </Link>
            <Link to='/leaderboard'>
                <li>Top 100 Leaderboard</li>
            </Link>
            <Link to='/skins'>
                <li>Skins</li>
            </Link>
        </ul>
    </nav>
);

export default Nav;