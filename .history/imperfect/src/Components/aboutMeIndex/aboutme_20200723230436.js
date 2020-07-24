import React from "react";
import "./aboutme.css";

function Aboutme() {
  return (
    <div className=" card aboutMain">
      <div className="sectionAB text-center">
        <div className="ABcontainer">
          <div class="row">
            <div class="ml-auto mr-auto col-md-8">
              <h2 class="titleAB">Let's talk About Me</h2>
              <h5 class="descriptionAB">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn't scroll to get here. Add a button if you
                want the user to see more.
              </h5>
              <br />
              <a href="#pablo" class="btn-round btn btn-info">
                See Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Aboutme;
