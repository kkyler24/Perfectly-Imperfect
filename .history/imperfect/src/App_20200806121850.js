import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/navbarComponent/navbar.js";
import PGHeader from "./Components/Headerindex/header.js";
import AboutMe from "./Components/aboutMeIndex/aboutme.js";

function App() {
  return (
    <div className="App">
      <PGHeader />
      {/* <Nav /> */}
      <AboutMe />
    </div>
  );
}

export default App;
