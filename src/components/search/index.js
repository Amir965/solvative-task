import React from "react";
import "./Search.css";
const Search = ({ setSearch, search }) => {
  window.addEventListener("keydown", function (e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 191)) {
      if (document.getElementById("search") !== document.activeElement) {
        e.preventDefault();
        document.getElementById("search").focus();
      } else {
        return true;
      }
    }
  });
  return (
    <div className="search">
      <input
        id="search"
        type="search"
        placeholder="search places"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
