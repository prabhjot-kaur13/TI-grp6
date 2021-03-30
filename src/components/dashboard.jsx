import React, { Component } from "react";
import "../css/dashboard.css";
import Donate from "./image2.jpg";
import Volunteer from "./image3.jpg";
import Join from "./image5.png";
import {
  Card, CardImg, CardBody,
  CardTitle
} from 'reactstrap';
import NavigationBarLogin from "./navigationBarLogin";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="container-dashboard">
        <NavigationBarLogin />
        <div className="container-card">
          <h1 className="text" style={{ textAlign: 'center' }}>SHARE</h1>
          <h3 className="textnew" style={{ textAlign: 'center' }}>Because We Care</h3>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <Card>
                <CardImg top width="50%" src={Donate} className="logo" alt="Card image cap" />
                <CardBody className="text-card">
                  <CardTitle tag="h5" className="text" style={{ textAlign: 'center' }}><a href="/donation">Donate Item</a></CardTitle>
                </CardBody>
              </Card>
            </div>
            <div className="col-lg-4 mb-4">
              <Card>
                <CardImg top width="50%" src={Volunteer} className="logo" alt="Card image cap" />
                <CardBody className="text-card">
                  <CardTitle tag="h5" className="text" style={{ textAlign: 'center' }}><a href="/volunteer">Become a Volunteer</a></CardTitle>
                </CardBody>
              </Card>
            </div>
            <div className="col-lg-4 mb-4">
              <Card>
                <CardImg top width="50%" src={Join} className="logo" alt="Card image cap" />
                <CardBody className="text-card">
                  <CardTitle tag="h5" className="text" style={{ textAlign: 'center' }}><a href="/donation">Join Us</a></CardTitle>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
