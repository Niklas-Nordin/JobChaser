import "./Search.css";

function SearchBar() {
  return (
    <>
      <form className="form">
        <input className="search" type="text" placeholder="Search jobs..." />
        <button className="search-button">Search</button>
      </form>
    </>
  );
}

export default SearchBar;
