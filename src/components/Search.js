import React from "react";

const searchStyle = {
  width: 300,
  margin: "0 auto",
  border: "pink solid 5",
};
function Search() {
  return (
    <div className="searchbar" style={searchStyle}>
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  );
}
export default Search;
