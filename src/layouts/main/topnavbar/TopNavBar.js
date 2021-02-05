import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

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
import { userLogOut } from "../../../store/auth/action";
import SignIn from "../signin/SignIn";
import SignUp from "../signup/SignUp";

import "./TopNavBar.scss";

function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  let history = useHistory();

  const { sendLoading } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const logoutAction = () => {
    dispatch(userLogOut(history));
  };

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

            {localStorage.getItem("token") ? (
              <div className="d-flex">
                <NavbarText className="ml-2 d-flex justify-content-center align-items-center">
                  <Link to="/admin">
                    <button className="nav-admin-btn px-3 py-1 rounded-pill">
                      Go to Admin
                    </button>
                  </Link>
                </NavbarText>
                <NavbarText className="ml-2 d-flex justify-content-center align-items-center">
                  <button
                    className="nav-admin-btn px-3 py-1 rounded-pill"
                    onClick={() => logoutAction()}
                  >
                    Log Out
                  </button>
                </NavbarText>
              </div>
            ) : (
              <div className="d-flex">
                <NavbarText className="ml-2 d-flex justify-content-center align-items-center">
                  <CustomModal
                    className="header-btn  px-3 py-1 rounded-pill"
                    buttonLabel="Sign In"
                    title="sign in"
                    modalContent={<SignIn sendLoading={sendLoading} />}
                  />
                </NavbarText>
                <NavbarText className="ml-2 d-flex justify-content-center align-items-center">
                  <CustomModal
                    className="header-btn  px-3 py-1 rounded-pill"
                    buttonLabel="Sign up"
                    modalContent={<SignUp />}
                    size="lg"
                  />
                </NavbarText>
              </div>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNavBar;
