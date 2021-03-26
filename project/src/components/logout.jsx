import React, { Component } from "react";
import NavigationBar from "./navigationBar";
import "../css/logout.css";

class Logout extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container-logout">
          <h3>Successfully logged out !!</h3>
        </div>
      </div>
    );
  }
}

export default Logout;
