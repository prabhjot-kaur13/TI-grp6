import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavigationBarLogin from "./navigationBarLogin";
import "../css/donate.css";

class Join extends Component {
    state = {
        submit: false,
    };

    joinClick() {
        this.setState(() => ({
            submit: true,
        }));
        alert("Thank you for becoming a part of the community.");
    }

    render() {
        if (this.state.submit === true) {
            return <Redirect push to={"/dashboard"} />;
        }
        return (
            <div className="container-leave">
                <NavigationBarLogin />
                <div className="container">
                    <div className="table-leave-container">
                        <div className="heading-container">
                            <h3> Join Our Family</h3>
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
                                        <label className="form-label" htmlFor="customFile">Resume</label>
                                    </td>
                                    <td>
                                        <input type="file" className="form-control" id="customFile" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <td>
                                    <p style={{ color: "red" }}>***Someone from our team will contact you soon.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="button-container">
                        <button
                            type="submit"
                            onClick={() => this.joinClick()}
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

export default Join;
