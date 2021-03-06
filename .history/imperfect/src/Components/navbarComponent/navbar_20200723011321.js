import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg fixed-top navbar-transparent"
        color-on-scroll="300"
      >
        <div class="container">
          <div class="navbar-translate">
            <a class="navbar-brand" target="_blank">
              Perfectly Imperfectly
            </a>
            <button
              class="navbar-toggler navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <div
            class="navbar-collapse justify-content-end collapse"
            id="navigation"
            style=""
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link"
                  rel="tooltip"
                  title="Star on Github"
                  data-placement="bottom"
                  href="https://github.com/kkyler24"
                  target="_blank"
                >
                  <i class="fa fa-github"></i>
                  <p class="d-lg-none">GitHub</p>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  rel="tooltip"
                  title="Star on GitHub"
                  data-placement="bottom"
                  href="https://www.github.com/CreativeTimOfficial/paper-kit"
                  target="_blank"
                >
                  <i class="fa fa-github"></i>
                  <p class="d-lg-none">GitHub</p>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://demos.creative-tim.com/paper-kit-2/docs/1.0/getting-started/introduction.html"
                  target="_blank"
                  class="nav-link"
                >
                  <i class="nc-icon nc-book-bookmark"></i> Documentation
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/product/paper-kit-2-pro?ref=pk2-free-local"
                  target="_blank"
                  class="btn btn-danger btn-round"
                >
                  Upgrade to Pro
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
