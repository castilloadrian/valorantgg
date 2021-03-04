import "./search.css";
import "./App";
const axios = require('axios');

const hitLeaderboard = () => {
    axios.get('http://localhost:8080/leaderboard')
    .then((response) => {
    console.log(response.data)
    })
}

const SearchBar = () => (
    <html>
        <header>
            <span>
                <button type="submit" onClick={hitLeaderboard}>Top 500 Leaderboard</button>
            </span>
            <span>
                <h1 align="center">
                    VALORANTGG
                </h1>
            </span>
            <hr></hr><br></br>
        </header>
        <body>
            <span>
                    <img src="/client/public/jett.png" alt="jett cant be displayed" align="left"/>
            </span>
            <span>
                    <form action="/" method="get" id="form"> 
                        <input
                            type="text"
                            id="header-search"
                            placeholder="Find an Agent, ie. player#NA1"
                            name="s" 
                        />
                    <button type="submit">Search</button>
                    </form>
            </span>
            <span>
                    <img src="./../public/pheonix.png" alt="pheonix cant be displayed" align="right"/>
            </span>
        </body>
    </html>
);

export default SearchBar;