import React from "react";

const searchStyle = {
  width: 300,
  margin: "0 auto",
  border: "pink solid 5",
};

class Search extends React.Component {
  state = { search: "" };

  // handleInputChange = (event) => {
  //   // Getting the value and name of the input which triggered the change

  //   this.setState({
  //     search: event.target.value,
  //   });
  // };

  render() {
    return (
      <div className="searchbar" style={searchStyle}>
        <input
          // value={this.state.paintsearch}
          className="form-control"
          //handleInputChange={this.handleInputChange}
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    );
  }
}
export default Search;
