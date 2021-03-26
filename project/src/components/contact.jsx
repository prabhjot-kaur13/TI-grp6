import React, { Component } from "react";
import logo from "./initial-logo.jpg";
import NavigationBar from "./navigationBar";

class Contact extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={logo} className="Home-logo" alt="logo" />
            </div>
            <div className="col">
              <div className="centerDiv">
                <h2> Contact Info </h2>
                <p>902-441-8765</p>
                <p>share_halifax@gmail.com</p>
                <p>
                  Address - Boss Plaza, 51 Supreme Court Unit C-6 Halifax, NS,
                  B3N 0G1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
