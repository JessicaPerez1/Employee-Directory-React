import React from "react";
import painters from "../painters.json";

const tableStyle = {
  margin: "10px 40px 10px 40px",
  image: {
    width: 200,
  },
};

//SORTING BY NAME ASCENDING ORDER
//  make headers into on clicks and a function that sorts using a slider(boolean ascending / descending)
//create sort logic
// render what comes out of the sort function, which will also need an empty array to fill up with the sorted data

class Table extends React.Component {
  state = { painters: painters };
  render() {
    //sort by alphabetical
    let sortedNames = this.state.painters;
    sortedNames.map((painter) => {
      console.log(painter.name);
      return painter.name;
    });
    let onClick = sortedNames.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    //console.log(this.state.painters);
    return (
      <div style={tableStyle}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">
                <button type="button" onClick={onClick}>
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
              <tr>
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
    );
  }
}

export default Table;
