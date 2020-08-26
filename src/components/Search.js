import React from "react";

const searchStyle = {
  width: 300,
  margin: "0 auto",
};
function Search() {
  return (
    <div className="active-pink-3 active-pink-4 mb-4" style={searchStyle}>
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
