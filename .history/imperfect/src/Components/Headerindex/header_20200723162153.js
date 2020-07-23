import React from "react;";
import Bird from "../../Assets/imgs/brownnoodyGreatbirdisland.jpg";
import style from "./header.module..css";
import "./header.module..css";

const backgroundImg = {};

function PageHeader() {
  return (
    <div
      className="page-header"
      data-parallax="true"
      style='background-image: url("/paper-kit-react/static/media/daniel-olahh.facbbdb7.jpg");'
    >
      <div className="filter"></div>
      <div className={style.container}>
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
