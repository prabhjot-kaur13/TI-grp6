import React, { Component } from "react";
import DatePickerComp from "./DatePickerComp";
import { Redirect } from "react-router-dom";

class ApplyDonation extends Component {
  state = {
    history: false,
  };

  historyClick() {
    this.setState(() => ({
      history: true,
    }));
    alert("Thank you for the donation.");
  }

  render() {
    if (this.state.history === true) {
      return <Redirect push to={"/donationHistory"} />;
    }
    return (
      <div>
        <div className="table-leave-container">
          <div className="heading-container">
            <h3> Donation Details</h3>
          </div>

          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <td>
                  <p>Category : </p>
                </td>
                <td>
                  <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Choose...</option>
                    <option value="1">Food</option>
                    <option value="2">Clothes</option>
                    <option value="3">Furniture</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <p>No of items : </p>
                </td>
                <td>
                  <textarea
                    className="form-control"
                    id="textarea"
                    rows="1"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label> Condition :</label>
                </td>
                <td>
                  <textarea
                    className="form-control"
                    id="textarea"
                    rows="1"
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Mode of Deliver : </p>
                </td>
                <td>
                  <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Choose...</option>
                    <option value="1">Pick-up</option>
                    <option value="2">Drop</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Date : </p>
                </td>
                <td>
                  <DatePickerComp />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="button-container">
          <button
            type="submit"
            onClick={() => this.historyClick()}
            className="btn btn-dark"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default ApplyDonation;
