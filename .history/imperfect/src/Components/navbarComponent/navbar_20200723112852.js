import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <div>
      <nav
        color-on-scroll="300"
        class="fixed-top navbar-transparent navbar navbar-expand-lg"
      >
        <div class="container">
          <div class="navbar-translate">
            <a
              data-placement="bottom"
              target="_blank"
              title="Coded The Confusion Group"
              class="navbar-brand"
              href="#/index"
            >
              Ky Kyler
            </a>
            <button aria-expanded="false" class="navbar-toggler navbar-toggler">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <div class="justify-content-end collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  href="#/index"
                  target="_blank"
                  class="btn-round btn btn-danger"
                >
                  <i class="nc-icon nc-spaceship"></i> Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/index">
                  <i class="nc-icon nc-layout-11"></i> Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a target="_blank" class="nav-link" href="#/documentation">
                  <i class="nc-icon nc-book-bookmark"></i> Resume
                </a>
              </li>
              <li class="nav-item">
                <a
                  data-placement="bottom"
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  title="Star on Github"
                  class="nav-link"
                >
                  <i class="fa fa-github"></i>
                  <p class="d-lg-none">Github</p>
                </a>
              </li>
              <li class="nav-item">
                <a
                  data-placement="bottom"
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  title="Follow us on Instagram"
                  class="nav-link"
                >
                  <i class="fa fa-instagram"></i>
                  <p class="d-lg-none">Instagram</p>
                </a>
              </li>
              <li class="nav-item">
                <a
                  data-placement="bottom"
                  href="https://www.github.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  title="Star on GitHub"
                  class="nav-link"
                >
                  <i class="fa fa-github"></i>
                  <p class="d-lg-none">GitHub</p>
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
