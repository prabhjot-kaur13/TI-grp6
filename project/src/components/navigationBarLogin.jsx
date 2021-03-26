import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../css/navigationBar.css";

class NavigationBarLogin extends Component {
  state = {};
  render() {
    return (
      <div className="navigation-login-container">
        <Navbar>
          <Navbar.Brand href="/dashboard">Share</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBarLogin;
