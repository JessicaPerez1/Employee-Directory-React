import React from "react";
import painters from "../painters.json";

const searchStyle = {
  width: 400,
  margin: "0 auto",
  border: "pink solid 5",
};
const tableStyle = {
  margin: "10px 40px 10px 40px",
  image: {
    width: 200,
  },
};

class Table extends React.Component {
  state = {
    painters: painters,
    filteredPainters: painters,
    resultOrdered: painters,
    search: "",
  };
  //SORTING BY NAME ASCENDING ALPHABETICAL ORDER
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
    console.log(sortedNames);
    this.setState({
      resultOrdered: sortedNames,
    });
    // this.setState({
    //   painters: painters,
    // });
  };

  //FILTER by name, table updates to match user input
  filterPainters = (e) => {
    const userInput = e.target.value;
    let allPainters = this.state.painters;
    console.log(userInput);
    let newPainters = allPainters.filter((painter) =>
      painter.name.toLowerCase().includes(userInput.toLowerCase())
    );
    console.log(newPainters);
    this.setState({
      filteredPainters: newPainters,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="searchbar" style={searchStyle}>
          <input
            className="user-type"
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
                  <button type="button" onClick={this.sortByName}>
                    Name
                  </button>
                </th>
                <th scope="col">Nationality</th>
                <th scope="col">DOB</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.filteredPainters.map((painter) => (
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
      </div>
    );
  }
}

export default Table;
