import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../css/navigationBar.css";

class NavigationBar extends Component {
  state = {};
  render() {
    return (
      <div className="navigation-container">
        <Navbar>
          <Navbar.Brand href="/">Share</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Info</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
