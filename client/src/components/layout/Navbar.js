import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("api/users/login", user)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            MapTripy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <form onSubmit={this.onSubmit}>
            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav ml-auto">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    placeholder="Email Address"
                    name={"email"}
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <button className="btn btn-info" type="submit">
                  Login
                </button>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
