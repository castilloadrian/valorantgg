import "./search.css";
import "./App";
const axios = require('axios');

const hitLeaderboard = () => {
    axios.get('http://localhost:8080/leaderboard')
    .then((response) => {
    var i = 0;
    for(i;i<100;i++){
        
        console.log('Rank: ' + (i+1) + ' ' + response.data.players[i].gameName);
    }
    })
}

const hitCharacters = () => {
    axios.get('http://localhost:8080/valcontent')
    .then((response) => {
        var i = 0;
        for(i;i<16;i++){
            console.log(response.data.characters[i].name)
        }
    })
}
const hitMaps = () => {
    axios.get('http://localhost:8080/valcontent')
    .then((response) => {
        var i = 1;
        for(i;i<7;i++){
            console.log(response.data.maps[i].name)
        }
    })
}
const hitSkins = () => {
    axios.get('http://localhost:8080/valcontent')
    .then((response) => {
        var i = 0;
        for(i;i<255;i++){
            console.log(response.data.skins[i].name)
        }
    
    })
}

const SearchBar = () => (
    <html>
        <header>
            <span>
                <button type="submit" onClick={hitLeaderboard}>Top 100 Leaderboard</button>
                <button type="submit" onClick={hitCharacters}>Character List</button>
                <button type="submit" onClick={hitMaps}>Map List</button>
                <button type="submit" onClick={hitSkins}>All Weapon Skins</button>
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
                    <img src="https://d.newsweek.com/en/full/1578649/valorant-jett-abilities-kit-release.jpg?w=1600&h=1600&l=46&t=9&q=88&f=612b4c14adfe75d49162b7fa83cc3bfb" width="400" height="500" alt="jett cant be displayed" align="left"/>
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
                    <img src="https://i.ytimg.com/vi/ttJMFW2wUQM/maxresdefault.jpg" width="400" height="500" alt="pheonix cant be displayed" align="right"/>
            </span>
        </body>
    </html>
);

export default SearchBar;