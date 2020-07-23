import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <div>
      <header class="MuiPaper-root MuiAppBar-root MuiAppBar-positionFixed MuiAppBar-colorPrimary jss9 jss22 jss11 mui-fixed MuiPaper-elevation4">
        <div class="MuiToolbar-root MuiToolbar-regular jss12 MuiToolbar-gutters">
          <div class="jss13">
            <button
              class="MuiButtonBase-root MuiButton-root MuiButton-text jss14"
              tabindex="0"
              type="button"
            >
              <span class="MuiButton-label">Material Kit React</span>
              <span class="MuiTouchRipple-root"></span>
            </button>
          </div>
          <div class="jss31">
            <ul class="MuiList-root jss41 MuiList-padding">
              <li class="MuiListItem-root jss42 MuiListItem-gutters">
                <div>
                  <div>
                    <button
                      class="MuiButtonBase-root MuiButton-root MuiButton-text jss73 jss87 jss44"
                      tabindex="0"
                      type="button"
                      aria-label="Notifications"
                      aria-haspopup="true"
                    >
                      <span class="MuiButton-label">
                        Components<b class="jss68"></b>
                      </span>
                      <span class="MuiTouchRipple-root"></span>
                    </button>
                  </div>
                </div>
              </li>
              <li class="MuiListItem-root jss42 MuiListItem-gutters">
                <a
                  class="MuiButtonBase-root MuiButton-root MuiButton-text jss73 jss87 jss44"
                  tabindex="0"
                  aria-disabled="false"
                  href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-navbar-upgrade-pro"
                  target="_blank"
                >
                  <span class="MuiButton-label">
                    <svg
                      class="MuiSvgIcon-root jss48"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path>
                    </svg>{" "}
                    Upgrade to PRO
                  </span>
                  <span class="MuiTouchRipple-root"></span>
                </a>
              </li>
              <li class="MuiListItem-root jss42 MuiListItem-gutters">
                <a
                  class="MuiButtonBase-root MuiButton-root MuiButton-text jss73 jss87 jss44"
                  tabindex="0"
                  aria-disabled="false"
                  href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                  target="_blank"
                >
                  <span class="MuiButton-label">
                    <svg
                      class="MuiSvgIcon-root jss48"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path>
                    </svg>{" "}
                    Download
                  </span>
                  <span class="MuiTouchRipple-root"></span>
                </a>
              </li>
              <li class="MuiListItem-root jss42 MuiListItem-gutters">
                <a
                  class="MuiButtonBase-root MuiButton-root MuiButton-text jss73 jss87 jss44"
                  tabindex="0"
                  aria-disabled="false"
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  title="Follow us on twitter"
                >
                  <span class="MuiButton-label">
                    <i class="jss49 fab fa-twitter"></i>
                  </span>
                  <span class="MuiTouchRipple-root"></span>
                </a>
              </li>
              <li class="MuiListItem-root jss42 MuiListItem-gutters">
                <a
                  class="MuiButtonBase-root MuiButton-root MuiButton-text jss73 jss87 jss44"
                  tabindex="0"
                  aria-disabled="false"
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  title="Follow us on facebook"
                >
                  <span class="MuiButton-label">
                    <i class="jss49 fab fa-facebook"></i>
                  </span>
                  <span class="MuiTouchRipple-root"></span>
                </a>
              </li>
              <li class="MuiListItem-root jss42 MuiListItem-gutters">
                <a
                  class="MuiButtonBase-root MuiButton-root MuiButton-text jss73 jss87 jss44"
                  tabindex="0"
                  aria-disabled="false"
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  title="Follow us on instagram"
                >
                  <span class="MuiButton-label">
                    <i class="jss49 fab fa-instagram"></i>
                  </span>
                  <span class="MuiTouchRipple-root"></span>
                </a>
              </li>
            </ul>
          </div>
          <button
            class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit"
            tabindex="0"
            type="button"
            aria-label="open drawer"
          >
            <span class="MuiIconButton-label">
              <svg
                class="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </svg>
            </span>
            <span class="MuiTouchRipple-root"></span>
          </button>
        </div>
      </header>
    </div>
  );
}
export default NavBar;
