import React from "react";

function SearchBar(props) {
  return (
    <input
      type="text"
      placeholder="Search Table"
      onChange={(e) => props.searchText(e)}
    />
  );
}

export default SearchBar;