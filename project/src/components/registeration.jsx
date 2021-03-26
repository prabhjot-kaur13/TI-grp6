import React, { Component } from "react";
import { Form } from "react-bootstrap";
import logo from "./initial-logo.jpg";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import NavigationBar from "./navigationBar";
import "./login.jsx";
import "../css/registeration.css";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validatePassword = RegExp(
  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class Registeration extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      valuesPresent: true,
      login: 1,
      fullName: "",
      password: "",
      confirmPassword: "",
      email: "",
      errors: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  handleChange = (event) => {
    const { password } = this.state;
    const { confirmPassword } = this.state;
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5 ? "Name must be 5 characters long!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password = validatePassword.test(value)
          ? ""
          : "Password does not comply to password policy!";
        if (confirmPassword.length > 0) {
          errors.confirmPassword =
            confirmPassword !== event.target.value
              ? "Passwords do not match"
              : "";
          break;
        }
        break;
      case "confirmPassword":
        errors.confirmPassword =
          password !== event.target.value ? "Passwords do not match" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    const { fullName } = this.state;
    const { password } = this.state;
    const { confirmPassword } = this.state;
    const { email } = this.state;
    this.setState({ login: 2 });
    event.preventDefault();
    this.setState({ formValid: validateForm(this.state.errors) });
    if (
      fullName.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      email.length > 0
    ) {
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
              <div className="form-wrapper">
                <h1 className="text-center">Register</h1>
                <form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      onChange={this.handleChange}
                    />
                    {errors.fullName.length > 0 && (
                      <span className="error">{errors.fullName}</span>
                    )}
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  {errors.email.length > 0 && (
                    <span className="error">{errors.email}</span>
                  )}

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  {errors.password.length > 0 && (
                    <span className="error">{errors.password}</span>
                  )}

                  <Form.Group controlId="formBasicRePassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  {errors.confirmPassword.length > 0 && (
                    <span className="error">{errors.confirmPassword}</span>
                  )}

                  <div className="info">
                    <small>
                      *Password must be atleast eight characters in length and
                      should have atleast one special character and number.
                    </small>
                  </div>

                  <div className="button-container">
                    <button type="submit" class="btn btn-dark">
                      Sign up
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

export default withRouter(Registeration);
