import React from "react";
//import "./App.css";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Head from "./components/Head";
import Table from "./components/Table";
//import painters from "./painters.json";

function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <Head />
      <Table />
    </div>
  );
}

export default App;
