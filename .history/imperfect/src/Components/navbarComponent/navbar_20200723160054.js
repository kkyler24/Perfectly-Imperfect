import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <div>
      <nav
        color-on-scroll="300"
        className="fixed-top navbar-transparent navbar navbar-expand-lg"
      >
        <div className="container">
          <div className="navbar-translate">
            <a
              data-placement="bottom"
              target="_blank"
              title="Coded The Confusion Group"
              className="navbar-brand"
              href="#/index"
            >
              Ky Kyler
            </a>
            <button
              aria-expanded="false"
              className="navbar-toggler navbar-toggler"
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <div className="justify-content-end collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="#/index"
                  target="_blank"
                  className="btn-round btn btn-danger"
                >
                  <div className=" d-md-none"></div>
                  <i className="nc-icon nc-spaceship"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/index">
                  <i className="nc-icon nc-layout-11"></i> Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a target="_blank" className="nav-link" href="#/documentation">
                  <i className="nc-icon nc-book-bookmark"></i> Resume
                </a>
              </li>
              <li className="nav-item">
                <a
                  data-placement="bottom"
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  title="follow me on LinkedIn"
                  className="nav-link"
                >
                  <i className="fa fa-linkedin"></i>
                  {/* consider adding a toolkit for linked in */}
                  <p className="d-lg-none">LinkedIn</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  data-placement="bottom"
                  href="https://www.github.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  title="Star on GitHub"
                  className="nav-link"
                >
                  <i className="fa fa-github"></i>
                  {/* consider adding a toolkit for github in */}
                  <p className="d-lg-none"></p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
