import React from "react";
import {
  Container,
  Navbar,
  Form,
  NavDropdown,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import menu from "../../menu json api/menu.json";

import company from "../../Company/company.json";

function Mainmenu({ demo }) {
  return (
    <>
      <Link to={demo.link} className={demo.isButtton ? "btn btn-info": "nav-link"}>
        {demo.label}
      </Link>

    </>
  );
}

function DropDownMenu({ demo }) {
  return (
    <NavDropdown title={demo.label} id="basic-nav-dropdown">
      {demo.dropdownMenu.map((data, index) => {
        return <Mainmenu demo={data} key={index} />;
      })}
    </NavDropdown>
  );
}


function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-dark">
        <Container fluid>
          <Link to="/" className="navbar-brand">
            <img
              style={{ width: 50 }}
              src={company.logo}
              alt="logo"
              className="me-2"
            />
            {company.name}
          </Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Link to="/" className="nav-link">Learn</Link>
              <Link to="/Refrence" className="nav-link">Refernce</Link>
              <Link to="/Community" className="nav-link">Community</Link>
              <Link to="/Blog" className="nav-link">Blog</Link> */}
              {menu.map((item, index) => {
                //   console.log(item, index);
                //  return <Link to={item.link}key={index}className="nav-link">{item.label}</Link>

                //  return <Link to={item.link} key={index} className="nav-link">{item.label}</Link>

                if (item.isDropDown) {
                  return <DropDownMenu demo={item} key={index} />;
                }

                return <Mainmenu demo={item} key={index} />;
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
