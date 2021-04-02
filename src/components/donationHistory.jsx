import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import NavigationBarLogin from "./navigationBarLogin";
import axios from "axios";

class DonationHistory extends Component {
  state = {
    applyDonation: false,
    itemData: []
  };

  applyClick = () => {
    this.setState({ applyDonation: true });
  };

  async getItems() {
    await axios
      .get("https://ti-backend1.herokuapp.com/api/item")
      .then((response) => {
        this.setState({
          itemData: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.message);
        alert("Items not found!");
      });
  }

  createTableRow() {
    this.getItems();
    let trs = [];
    this.state.itemData.map((row, index) => {
      trs.push(
        <tr>
          <td>{index}</td>
          <td>{row.Category}</td>
          <td>{row.Date}</td>
        </tr>
      );
    });
    return trs;
  }

  render() {
    if (this.state.applyDonation) {
      return <Redirect push to={"/donation"} />;
    }
    return (
      <div className="container-leave">
        <NavigationBarLogin />
        <div className="container">
          <table className="table-sm table-bordered table-active">
            <tbody>
              <tr>
                <td>
                  <span type="submit" onClick={() => this.applyClick()}>
                    <u>Donate</u>
                  </span>
                </td>
                <td>
                  <span className="btn btn-dark active">Donation History</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="table-leave-container">
            <div className="heading-container">
              <h3> Donation History </h3>
            </div>
            <table className="table table-striped table-bordered">
              <thead className="thead-container">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Category</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {this.createTableRow()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DonationHistory);
