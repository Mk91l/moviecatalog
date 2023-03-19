import React, { Component } from "react";
import { withRouter } from "react-router";
import "./Login.css";

const admin = {
  email: "admin@admin.it",
  password: "admin",
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: {
        email: "",
        password: "",
      },
    };
  }

  setFieldValue = (event) => {
    const loginForm = { ...this.state.loginForm };
    loginForm[event.target.id] = event.target.value;
    this.setState({ loginForm: loginForm });
  };

  login = (event) => {
    event.preventDefault();
    if (
      this.state.loginForm.email === admin.email &&
      this.state.loginForm.password === admin.password
    ) {
      localStorage.setItem("isLogged", true);
      this.props.history.push("/movies");
    }
  };

  render() {
    return (
      <div className="bg-dark" style={{ height: "81.1vh" }}>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <form className="fadeIn first mt-4">
              <input
                type="text"
                id="email"
                className="fadeIn second"
                placeholder="email"
                value={this.state.loginForm.email}
                onChange={this.setFieldValue}
              />
              <input
                type="password"
                id="password"
                className="fadeIn third"
                placeholder="password"
                value={this.state.loginForm.password}
                onChange={this.setFieldValue}
              />
              <input
                type="submit"
                className="btn btn-sm btn-warning fadeIn fourth"
                value="Log In"
                onClick={this.login}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
