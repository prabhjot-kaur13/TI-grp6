import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import NavigationBarLogin from "./navigationBarLogin";

class DonationHistory extends Component {
  state = {
    applyDonation: false,
  };

  applyClick = () => {
    this.setState({ applyDonation: true });
  };


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
                <tr>
                  <td>
                    <span>1</span>
                  </td>
                  <td>
                    <span>Food</span>
                  </td>
                  <td>
                    <span>10-07-2020</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>2</span>
                  </td>
                  <td>
                    <span>Clothes</span>
                  </td>
                  <td>
                    <span>10-02-2021</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DonationHistory);
