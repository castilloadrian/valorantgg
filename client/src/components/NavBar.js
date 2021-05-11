import './../styles/NavBar.css';
import { Link } from 'react-router-dom';

const navStyle = {
    color: 'white'
};

const Nav = () => (
    <div>
        <nav>
            <Link style={navStyle} to="/" className="homelink">
                <h1 className="valorantgg">VALORANTGG</h1>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to='/agents' className="homelink">
                    <li>Agents</li>
                </Link>
                <Link style={navStyle} to='/matchhistory' className="homelink">
                    <li>Match History</li>
                </Link>
                <Link style={navStyle} to='/maps' className="homelink">
                    <li>Maps</li>
                </Link>
                <Link style={navStyle} to='/leaderboard' className="homelink">
                    <li>Top 100 Leaderboard</li>
                </Link>
                <Link style={navStyle} to='/skins' className="homelink">
                    <li>Skins</li>
                </Link>
            </ul>
        </nav>
    </div>
);

export default Nav;