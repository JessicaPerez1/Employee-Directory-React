import React from "react";

const tableStyle = {
  margin: "10px 40px 10px 40px",
  image: {
    width: 50,
  },
};
function Table() {
  return (
    <div style={tableStyle}>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">DOB</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <img
                src="https://www.nationalgeographic.com/content/dam/news/2017/11/2/book-talk-leonardo-da-vinci/01-leonardo-da-vinci-book-talk.jpg"
                alt="Da Vinci portrait"
                style={tableStyle.image}
              ></img>
            </th>
            <td>Leonardo Da Vinci</td>
            <td>Painter/Sculptor</td>
            <td>1452</td>
            <td>leodavinci@vatican.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
