import React from "react";

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

class Head extends React.Component {
  state = {};

  render() {
    return (
      <div style={tableStyle}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Nationality</th>
              <th scope="col">DOB</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
export default Head;
