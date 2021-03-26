import React, { Component } from "react";
import logo from "./initial-logo.jpg";
import NavigationBar from "./navigationBar";

class About extends Component {
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
                <h2> About Us </h2>
                <p>
                  MyStore is a one-stop place that aims to offer customers a
                  wide range of basic home and personal products under one roof.
                  The store stocks home utility products - including food,
                  toiletries, beauty products,kitchenware, bed and bath linen,
                  home appliances and more - available at competitive prices
                  that our customers appreciate. Our core objective is to offer
                  customers good products at great value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
