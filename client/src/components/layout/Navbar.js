import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <a className="navbar-brand" href="landing.html">
            MapTripy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  placeholder="Email Address"
                  name="email"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-sm"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>
              <li className="nav-item">
                <a className="nav-link" href="feed.html">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
