import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavigationBarLogin from "./navigationBarLogin";
import "../css/donate.css";

class Volunteer extends Component {
    state = {
        becomeVolunteer: false,
    };

    submitClick() {
        this.setState(() => ({
            becomeVolunteer: true,
        }));
        alert("Thank you for becoming a part of the community.");
    }

    render() {
        if (this.state.becomeVolunteer === true) {
            return <Redirect push to={"/dashboard"} />;
        }
        return (
            <div className="container-leave">
                <NavigationBarLogin />
                <div className="container">
                    <div className="table-leave-container">
                        <div className="heading-container">
                            <h3> Become a Volunteer</h3>
                        </div>
                        <table className="table table-striped table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Full Name : </p>
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
                                        <p>Contact Number : </p>
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
                                        <label> Address :</label>
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
                                        <label> City :</label>
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
                                        <p>Any thoughts? We'd love to hear! : </p>
                                    </td>
                                    <td>
                                        <textarea
                                            className="form-control"
                                            id="textarea"
                                            rows="1"
                                        ></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <table className="table table-striped table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <p><b>Our Core Principles </b></p>
                                    <p>SHARE is apolitical - I shall never use Share for poliyical reasons.</p>
                                    <p>SHARE includes all religions - I shall respect all religions in my work with the Share.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="button-container">
                        <button
                            type="submit"
                            onClick={() => this.submitClick()}
                            className="btn btn-dark"
                        >
                            Submit
          </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Volunteer;
