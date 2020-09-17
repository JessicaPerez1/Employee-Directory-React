import React from "react";

const root = {
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "dimGrey",
    width: "100%",
    margin: "0",
  },
};
const navStyle = {
  div: {
    color: "dimGrey",
    backgroundColor: "lavenderBlush",
    // textAlign: "center",
    // paddingTop: 40,
    // paddingBottom: 40,
    width: "100%",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 30,
  },
};

function Navbar() {
  return (
    <div style={root.div}>
      <div style={navStyle.div}>
        <nav className="navbar justify-content-center navbar-light">
          <span className="navbar-brand h1" style={navStyle.title}>
            The Famous Painter's Rolodex
          </span>
        </nav>
        <br />
        <p style={navStyle.subtitle}>Look up your favorite painters!</p>
      </div>
    </div>
  );
}
export default Navbar;
