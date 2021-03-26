import React, { Component } from "react";
import "../css/dashboard.css";
import Donate from "./Donate.png";
import Volunteer from "./volunteer.png";
import Join from "./join.jpg";
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
          <h1 style={{ textAlign: 'center' }}>SHARE</h1>
          <h3 style={{ textAlign: 'center' }}>BECAUSE WE CARE</h3>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <Card>
                <CardImg top width="50%" src={Donate} className="logo" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5" style={{ textAlign: 'center' }}><a href="/donation">Donate Item</a></CardTitle>
                </CardBody>
              </Card>
            </div>
            <div className="col-lg-4 mb-4">
              <Card>
                <CardImg top width="50%" src={Volunteer} className="logo" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5" style={{ textAlign: 'center' }}><a href="/donation">Become a Volunteer</a></CardTitle>
                </CardBody>
              </Card>
            </div>
            <div className="col-lg-4 mb-4">
              <Card>
                <CardImg top width="50%" src={Join} className="logo" alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5" style={{ textAlign: 'center' }}><a href="/donation">Join Us</a></CardTitle>
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
