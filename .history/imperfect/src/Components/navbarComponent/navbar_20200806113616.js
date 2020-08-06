import React from "react";
import "./navbar.css";

// function NavBar() {
//   return (
//     <div>
//       <nav
//         color-on-scroll="300"
//         class="fixed-top navbar-transparent navbar navbar-expand-lg"
//       >
//         <div class="container-fluid">
//           <div class="navbar-translate">
//             <a
//               id="Kytitle"
//               data-placement="bottom"
//               target="_blank"
//               title="Coded by Creative Tim"
//               class="navbar-brand"
//               href="#/index"
//             >
//               Ky
//             </a>
//             <button aria-expanded="false" class="navbar-toggler navbar-toggler">
//               <span class="navbar-toggler-bar bar1"></span>
//               <span class="navbar-toggler-bar bar2"></span>
//               <span class="navbar-toggler-bar bar3"></span>
//             </button>
//           </div>
//           <div class="justify-content-end collapse navbar-collapse">
//             <ul class="navbar-nav">
//               <li class="nav-item">
//                 <a
//                   data-placement="bottom"
//                   href="https://www.linkedIn"
//                   target="_blank"
//                   title="Let's connect on LinkedIn"
//                   class="nav-link"
//                 >
//                   {/* <i class="fa fa-linkedIn"></i> */}
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a
//                   data-placement="bottom"
//                   href="https://www.linkedIn"
//                   target="_blank"
//                   title="Let's connect on LinkedIn"
//                   class="nav-link"
//                 >
//                   {/* <i class="fa fa-linkedIn"></i> */}
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a
//                   data-placement="bottom"
//                   href="https://twitter.com/CreativeTim?ref=creativetim"
//                   target="_blank"
//                   title="Follow us on Twitter"
//                   class="nav-link"
//                 >
//                   {/* <i class="fa fa-twitter"></i> */}
//                   <p class="d-lg-none"></p>
//                 </a>
//                 <li class="nav-item mr-2rem">
//                   <a
//                     data-placement="bottom"
//                     href="https://www.github.com/CreativeTimOfficial?ref=creativetim"
//                     target="_blank"
//                     title="Star on GitHub"
//                     class="nav-link"
//                   >
//                     {/* <i class="fa fa-github"></i> */}
//                     <p class="d-lg-none"></p>
//                   </a>
//                 </li>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#/index">
//                   <i class="nc-icon nc-layout-11"></i> Home
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#/index">
//                   <i class="nc-icon nc-layout-11"></i> Portfolio
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a target="_blank" class="nav-link" href="#/documentation">
//                   <i class="nc-icon nc-book-bookmark"></i> Resume
//                 </a>
//               </li>

//               <li class="nav-item">
//                 <a
//                   data-placement="bottom"
//                   href="https://www.github.com/CreativeTimOfficial?ref=creativetim"
//                   target="_blank"
//                   title="Star on GitHub"
//                   class="nav-link"
//                 >
//                   {/* <i class="fa fa-github"></i> */}
//                   <p class="d-lg-none"></p>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
// export default NavBar;

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function NavBar() {
  return (
    <>
      <div className="section section-navbars">
        <Container id="menu-dropdown">
          <div className="title">
            <h3>Menu</h3>
          </div>
          <br />
          <Row>
            <Col md="6">
              <Navbar className="bg-primary" expand="lg">
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  Menu
                </NavbarBrand>
                <button
                  aria-controls="navbarSupportedContent"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-menu"
                  data-toggle="collapse"
                  id="navbar-menu"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-menu">
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Link
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Link
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="default"
                        data-toggle="dropdown"
                        href="#pablo"
                        id="dropdownMenuButton"
                        nav
                        onClick={(e) => e.preventDefault()}
                        role="button"
                      >
                        Dropdown
                      </DropdownToggle>
                      <DropdownMenu
                        aria-labelledby="dropdownMenuButton"
                        className="dropdown-info"
                      >
                        <DropdownItem header tag="span">
                          Dropdown header
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Separated link
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </UncontrolledCollapse>
              </Navbar>
            </Col>
            <Col md="6">
              <Navbar className="bg-danger" expand="lg">
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  Icons
                </NavbarBrand>
                <button
                  aria-controls="navbarSupportedContent"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-menu-icon"
                  data-toggle="collapse"
                  id="navbar-menu-icon"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-menu-icon">
                  <Nav className="ml-auto" navbar>
                    <NavItem className="active">
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i aria-hidden={true} className="nc-icon nc-email-85" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="nc-icon nc-single-02"
                        />
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="default"
                        data-toggle="dropdown"
                        href="#pablo"
                        nav
                        onClick={(e) => e.preventDefault()}
                        role="button"
                      >
                        <i
                          aria-hidden={true}
                          className="nc-icon nc-settings-gear-65"
                        />
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-danger" right>
                        <DropdownItem header tag="span">
                          Dropdown header
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </UncontrolledCollapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NavBar;
