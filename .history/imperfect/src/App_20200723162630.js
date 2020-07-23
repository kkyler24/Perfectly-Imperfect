import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/navbarComponent/navbar.js";
import PGheader from "./Components/Headerindex/header.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <PGheader />
    </div>
  );
}

export default App;
