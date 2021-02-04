import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
} from "reactstrap";
import CustomModal from "../../../components/customModal/CustomModal";
import SignIn from "../signin/SignIn";

function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar
        className="shadow-lg"
        style={{ backgroundColor: "rgb(232, 241, 255)" }}
        light
        expand="md"
        fixed="top"
      >
        <Container>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem className=" d-flex justify-content-center align-items-center">
                <NavLink href="#!">main</NavLink>
              </NavItem>
              <NavItem className="d-flex justify-content-center align-items-center">
                <NavLink href="#!">about</NavLink>
              </NavItem>
              <NavItem className="d-flex justify-content-center align-items-center">
                <NavLink href="#!">news</NavLink>
              </NavItem>
              <NavItem className="d-flex justify-content-center align-items-center">
                <NavLink href="#!">contanct</NavLink>
              </NavItem>
            </Nav>

            <NavbarText className="ml-2 d-flex justify-content-center align-items-center">
              <CustomModal
                className="header-btn  px-3 py-1 rounded-pill"
                buttonLabel="Sign In"
                title="sign in"
                modalContent={<SignIn />}
              />
            </NavbarText>
            <NavbarText className="ml-2 d-flex justify-content-center align-items-center">
              <CustomModal
                className="header-btn  px-3 py-1 rounded-pill"
                buttonLabel="Sign up"
                modalContent={<h1>this is sign up</h1>}
              />
            </NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNavBar;
