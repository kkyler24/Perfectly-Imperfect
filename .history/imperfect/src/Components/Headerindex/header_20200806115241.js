import React from "react";
import "./Indexheader.css";

function PageHeader(props) {
  return (
    <div id="background" className="page-header" data-parallax="true">
      <div className="filter"></div>
      <div className="headerContainer">
        <div className="motto text-center">
          <h1 id="JumboHeaderTitle">Perfectly Imperfect</h1>
          <h5>Special Education Teacher turned Software Developer</h5>
          <br />
        </div>
      </div>
    </div>
  );
}
export default PageHeader;
