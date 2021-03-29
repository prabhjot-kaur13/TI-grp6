import React, { Component } from "react";
import logo from "./image1.jfif";
import "../css/home.css";
import "./login.jsx";
import Login from "./login.jsx";
import Registeration from "./registeration";
import NavigationBar from "./navigationBar";

class Home extends Component {
  renderComponent() {
    const { registeration } = this.state;
    if (registeration === true) {
      return (
        <div className="formDiv">
          <Login trigger={() => this.handleClick()} />
        </div>
      );
    } else {
      return <Registeration />;
    }
  }

  render() {
    return (
      <div className="body">
        <NavigationBar />
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={logo} className="Home-logo" alt="logo" />
            </div>
            <div className="col">
              <Login />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
