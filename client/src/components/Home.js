import './../styles/Home.css';

const SearchBar = () => (
    <html>
        <body>
            <h1 align='center'>VALORANTGG</h1>
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