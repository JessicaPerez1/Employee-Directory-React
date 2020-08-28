import React from "react";
import painters from "../painters.json";

const searchStyle = {
  width: 300,
  margin: "0 auto",
  border: "pink solid 5",
};

class Search extends React.Component {
  state = { search: "" };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  // handleFormSubmit = event => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();

  //   // clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
  //   this.setState({
  //     search: "",
  //   });
  // };

  render() {
    return (
      <div className="searchbar" style={searchStyle}>
        <input
          value={painters.name}
          className="form-control"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    );
  }
}
export default Search;
