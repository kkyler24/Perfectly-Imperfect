import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/navbarComponent/navbar.js";
import PGHeader from "./Components/Headerindex/header.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <PGHeader />
    </div>
  );
}

export default App;
