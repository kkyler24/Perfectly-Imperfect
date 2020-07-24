import React from "react";
import Bird from "../../Assets/imgs/brownnoodyGreatbirdisland.jpg";
import style from "./header.module..css";
import "./header.module..css";

const backgroundImg = {
  backgroundImage: { Bird },
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "500px",
};

function PageHeader(props) {
  return (
    <div className="page-header" data-parallax="true">
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
