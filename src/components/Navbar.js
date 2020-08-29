import React from "react";

//include import NAV style sheet maybe
const navStyle = {
  div: {
    color: "dimGrey",
    backgroundColor: "lavenderBlush",
    textAlign: "center",
    paddingTop: 40,
    paddingBottom: 40,
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
    <div className=" mx-auto" style={navStyle.div}>
      <nav className="navbar justify-content-center navbar-light">
        <span className="navbar-brand h1" style={navStyle.title}>
          The Famous Painter's Rolodex
        </span>
      </nav>
      <p style={navStyle.subtitle}>Look up your favorite painters!</p>
    </div>
  );
}
export default Navbar;
