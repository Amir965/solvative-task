import React from "react";
import "./Search.css";
const Search = ({ setSearch, search }) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="search places"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
