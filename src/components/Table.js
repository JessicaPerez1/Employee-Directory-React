import React from "react";
import painters from "../painters.json";

const tableStyle = {
  margin: "10px 40px 10px 40px",
  image: {
    width: 140,
  },
};

class Table extends React.Component {
  state = { painters: painters };

  render() {
    console.log(this.state.painters);
    return (
      <div style={tableStyle}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              {/* include onclick */}
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Nationality</th>
              <th scope="col">DOB</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {/* creating a new row for each painter */}
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
