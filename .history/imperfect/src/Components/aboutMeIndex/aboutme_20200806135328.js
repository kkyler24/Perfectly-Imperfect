import React from "react";
import "./aboutme.css";

function Aboutme() {
  return (
    <div className=" card aboutMain">
      <div className="sectionAB text-center">
        <div className="ABccontainer">
          <div class="row">
            <div class="ml-auto mr-auto col-md-8">
              <h2 class="titleAB"> Who am I?</h2>
              <h4 class="descriptionAB">
                I am a Computer Science and Special Education Teacher{" "}
              </h4>
              <br />
              <p>
                In summary I am a Computer Science and Special Education Teacher
                Turned Software Developer. I found my passion for technology
                through teaching. I have developed creative and innovate ways to
                enhance my technology and learning for the success of my
                students. Now I am focused on using technology to create content
                and deliver it to those who need it most! I like to be hands on
                and see a project through from start to finish. As a former
                teacher I am always learning and fast!
              </p>
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
