import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "../css/login.css";

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

class Login extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      valuesPresent: true,
      login: 1,
      register: false,
      forgetPassword: false,
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
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password = validatePassword.test(value)
          ? ""
          : "Password does not comply to password policy!";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    const { password } = this.state;
    const { email } = this.state;
    this.setState({ login: 2 });
    event.preventDefault();
    this.setState({ formValid: validateForm(this.state.errors) });
    if (password.length > 0 && email.length > 0) {
      this.setState({ valuesPresent: true });
    } else {
      this.setState({ valuesPresent: false });
    }
  };

  changeToforgetPasssword = () => {
    this.setState({ forgetPassword: true });
  };

  changeToRegister = () => {
    this.setState({ register: true });
  };

  render() {
    if (this.state.register) {
      return <Redirect push to={"/registeration"} />;
    }

    if (this.state.forgetPassword) {
      return <Redirect push to={"/forgetpassword"} />;
    }

    const { errors } = this.state;
    return (
      <div className="form-container">
        <h1 className="navStyle">Welcome</h1>
        <div className="text">
        <form onSubmit={this.handleSubmit}>
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

          <div className="button-container">
            <button type="submit" className="btn btn-light">
              Log in
            </button>
          </div>
          {this.state.valuesPresent !== true ? (
            <p className="form-status">Invalid ❌</p>
          ) : this.state.formValid !== true ? (
            <p className="form-status">Invalid ❌</p>
          ) : this.state.login === 1 ? (
            ""
          ) : (
            <Redirect push to={"/dashboard"} />
          )}
        </form>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td className="Forget-container">
                <span
                  className="forgotPassword"
                  type="submit"
                  onClick={this.changeToforgetPasssword}
                >
                  Forgot Password
                </span>
              </td>
              <td className="register-container">
                <span
                  className="registeration"
                  type="submit"
                  onClick={this.changeToRegister}
                >
                  New user? Register here
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>
    );
  }
}

export default withRouter(Login);
