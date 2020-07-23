import React from "react;";
import Bird from "../../Assets/imgs/brownnoodyGreatbirdisland.jpg";

function PageHeader() {
  return (
    <div
      class="page-header"
      data-parallax="true"
      style='background-image: url("/paper-kit-react/static/media/daniel-olahh.facbbdb7.jpg");'
    >
      <div class="filter"></div>
      <div class="container">
        <div class="motto text-center">
          <h1>Example page</h1>
          <h3>Start designing your landing page here.</h3>
          <br />
        </div>
      </div>
    </div>
  );
}
export default PageHeader;
