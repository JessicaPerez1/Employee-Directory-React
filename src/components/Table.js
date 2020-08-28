import React from "react";
import painters from "../painters.json";

const tableStyle = {
  margin: "10px 40px 10px 40px",
  image: {
    width: 200,
  },
};

const searchStyle = {
  width: 300,
  margin: "0 auto",
  border: "pink solid 5",
};
//SORTING BY NAME ASCENDING ORDER
//  make headers into on clicks and a function that sorts using a slider(boolean ascending / descending)
//create sort logic
// render what comes out of the sort function, which will also need an empty array to fill up with the sorted data

class Table extends React.Component {
  state = {
    painters: painters,
    resultOrdered: [],
    resultFiltered: [],
    original: painters,
    search: "",
  };

  //sort by NAME / alphabetical order
  sortByName = () => {
    let sortedNames = this.state.painters;
    sortedNames.map((painter) => {
      console.log(painter.name);
      return painter.name;
    });
    sortedNames.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };
  //handle click on NAME button
  handleClick = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // setting state to the new ordered list
    this.setState({
      resultOrdered: this.sortByName(),
    });
  };

  filterPainters = (e) => {
    const userType = e.target.value;
    let filteredPainters = this.state.painters;
    console.log(userType);
    let newPainters = filteredPainters.filter((painter) =>
      painter.name.toLowerCase().includes(userType.toLowerCase())
    );
    console.log(newPainters);
    return this.setState({
      painters: newPainters,
    });
  };

  reset = () => {
    this.setState({
      original: painters,
    });
  };
  render() {
    //console.log(this.state.painters);
    return (
      <>
        <div className="searchbar" style={searchStyle}>
          <input
            value={this.state.search}
            className="form-control"
            onChange={this.filterPainters}
            type="text"
            placeholder="Search"
            aria-label="Search"
            name="search"
          />
        </div>
        <div style={tableStyle}>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Image</th>
                <th scope="col">
                  <button type="button" onClick={this.handleClick}>
                    Name
                  </button>
                </th>
                <th scope="col">Nationality</th>
                <th scope="col">DOB</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.painters.map((painter) => (
                <tr key={painter.id}>
                  <th scope="row">
                    <img
                      src={painter.image}
                      alt={painter.name}
                      style={tableStyle.image}
                    ></img>
                  </th>
                  <td>{painter.name}</td>
                  <td>{painter.nationality}</td>
                  <td>{painter.DOB}</td>
                  <td>{painter.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Table;
