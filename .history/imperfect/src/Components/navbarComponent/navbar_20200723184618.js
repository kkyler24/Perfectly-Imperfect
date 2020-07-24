import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <div>
      <nav
        color-on-scroll="300"
        ClassName="fixed-top navbar-transparent navbar navbar-expand-lg"
      >
        <div ClassName="container-fluid">
          <div ClassName="navbar-translate">
            <a
              data-placement="bottom"
              target="_blank"
              title="Coded by Creative Tim"
              ClassName="navbar-brand"
              href="#/index"
            >
              Ky Kyler
            </a>
            <button
              aria-expanded="false"
              ClassName="navbar-toggler navbar-toggler"
            >
              <span ClassName="navbar-toggler-bar bar1"></span>
              <span ClassName="navbar-toggler-bar bar2"></span>
              <span ClassName="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <div ClassName="justify-content-end collapse navbar-collapse">
            <ul ClassName="navbar-nav">
              <li ClassName="nav-item">
                <a
                  data-placement="bottom"
                  href="https://www.linkedIn"
                  target="_blank"
                  title="Let's connect on LinkedIn"
                  ClassName="nav-link"
                >
                  {/* <i ClassName="fa fa-linkedIn"></i> */}
                </a>
              </li>
              <li ClassName="nav-item">
                <a
                  data-placement="bottom"
                  href="https://www.linkedIn"
                  target="_blank"
                  title="Let's connect on LinkedIn"
                  ClassName="nav-link"
                >
                  {/* <i ClassName="fa fa-linkedIn"></i> */}
                </a>
              </li>
              <li ClassName="nav-item">
                <a
                  data-placement="bottom"
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  title="Follow us on Twitter"
                  ClassName="nav-link"
                >
                  {/* <i ClassName="fa fa-twitter"></i> */}
                  <p ClassName="d-lg-none"></p>
                </a>
                <li ClassName="nav-item mr-2rem">
                  <a
                    data-placement="bottom"
                    href="https://www.github.com/CreativeTimOfficial?ref=creativetim"
                    target="_blank"
                    title="Star on GitHub"
                    ClassName="nav-link"
                  >
                    {/* <i ClassName="fa fa-github"></i> */}
                    <p ClassName="d-lg-none"></p>
                  </a>
                </li>
              </li>
              <li ClassName="nav-item">
                <a ClassName="nav-link" href="#/index">
                  <i ClassName="nc-icon nc-layout-11"></i> Home
                </a>
              </li>
              <li ClassName="nav-item">
                <a ClassName="nav-link" href="#/index">
                  <i ClassName="nc-icon nc-layout-11"></i> Portfolio
                </a>
              </li>
              <li ClassName="nav-item">
                <a target="_blank" ClassName="nav-link" href="#/documentation">
                  <i ClassName="nc-icon nc-book-bookmark"></i> Resume
                </a>
              </li>

              <li ClassName="nav-item">
                <a
                  data-placement="bottom"
                  href="https://www.github.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  title="Star on GitHub"
                  ClassName="nav-link"
                >
                  {/* <i ClassName="fa fa-github"></i> */}
                  <p ClassName="d-lg-none"></p>
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
