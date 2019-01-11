import React from "react";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <div className="fixed-bottom">
      <Navbar
        className="text-center d-flex justify-content-center"
        color="dark"
      >
        <Nav className="d-flex justify-content-center" navbar>
          <NavItem>
            <NavLink href="#">
              <FaInstagram />
              <FaFacebookF />
            </NavLink>
            <p className="text-white">2019 COPYRIGHT &copy; w00t Inc.</p>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
