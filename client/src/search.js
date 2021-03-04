const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Players: </span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Find an Agent, ie. player#NA1"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;