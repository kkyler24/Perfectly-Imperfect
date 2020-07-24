import React from "react";
import "./indexheader.css";

function PageHeader(props) {
  return (
    <div id="background" className="page-header" data-parallax="true">
      <div className="filter"></div>
      <div className="headerContainer">
        <div className="motto text-center">
          <h1>Perfectly Imperfect</h1>
          <h3></h3>
          <br />
        </div>
      </div>
    </div>
  );
}
export default PageHeader;
