import React, { Component } from "react";
import { Form } from "react-bootstrap";
import logo from "./initial-logo.jpg";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "../css/forgetpassword.css";
import NavigationBar from "./navigationBar";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class ForgetPassword extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      valuesPresent: true,
      login: 1,
      email: "",
      errors: {
        email: "",
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    const { email } = this.state;
    this.setState({ login: 2 });
    event.preventDefault();
    this.setState({ formValid: validateForm(this.state.errors) });
    if (email.length > 0) {
      this.setState({ valuesPresent: true });
    } else {
      this.setState({ valuesPresent: false });
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <NavigationBar />
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={logo} className="Home-logo" alt="logo" />
            </div>
            <div className="col">
              <div className="forget-container">
                <h1 className="text-center">Forgot Password</h1>
                <form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Please enter the recovery email"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  {errors.email.length > 0 && (
                    <span className="error">{errors.email}</span>
                  )}

                  <div className="button-container">
                    <button type="submit" class="btn btn-dark">
                      Reset
                    </button>
                  </div>

                  {this.state.valuesPresent !== true ? (
                    <p className="form-status">Invalid ❌</p>
                  ) : this.state.formValid !== true ? (
                    <p className="form-status">Invalid ❌</p>
                  ) : this.state.login === 1 ? (
                    ""
                  ) : (
                          <Redirect push to={"/"} />
                        )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ForgetPassword);
