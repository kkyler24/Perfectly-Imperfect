import React from "react";
import "./aboutme.css";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardTitle,
//   CardText,
//   Button,
// } from "reactstrap";

function Aboutme() {
  return (
    <div className="aboutMain">
      <Card>
        <CardHeader>Featured</CardHeader>
        <CardBody>
          <CardTitle>Special title treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button href="/#" color="primary">
            Go somewhere
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
export default Aboutme;
