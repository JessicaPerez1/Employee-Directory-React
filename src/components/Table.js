import React from "react";
import painters from "../painters.json";

const tableStyle = {
  margin: "10px 40px 10px 40px",
  image: {
    width: 200,
  },
};

class Table extends React.Component {
  state = { painters: painters };

  render() {
    console.log(this.state.painters);
    return (
      <div style={tableStyle}>
        <table className="table">
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
