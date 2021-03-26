import React, { Component } from "react";
import ApplyDonation from "./applyDonation";
import { Redirect } from "react-router-dom";
import "../css/donate.css";
import NavigationBarLogin from "./navigationBarLogin";

class Donation extends Component {
  state = {
    history: false,
  };

  historyClick() {
    this.setState(() => ({
      history: true,
    }));
  }

  render() {
    if (this.state.history === true) {
      return <Redirect push to={"/donationHistory"} />;
    }
    return (
      <div className="container-leave">
        <NavigationBarLogin />
        <div className="container">
          <table className="table-sm table-bordered table-active">
            <tbody>
              <tr>
                <td>
                  <span className="btn btn-dark active">Donate</span>
                </td>
                <td>
                  <span type="submit" onClick={() => this.historyClick()}>
                    <u>Donation History</u>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <ApplyDonation />
        </div>
      </div>
    );
  }
}

export default Donation;
