import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser);
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="column">
                <div className="text-left ">
                  <h1 className="display-3 text-center">
                    <img src="./img/world.gif" />MapTripy
                  </h1>

                  <p className="leads">
                    {" "}
                    Create a User profile, that allows people to plan and share
                    travel plans. This site is made for the conveyance of group
                    travel.{" "}
                  </p>
                  <p className="leads">
                    {" "}
                    “It is not the destination where you end up but the mishaps
                    and memories you create along the way.”{" "}
                  </p>
                  <p className="leads">
                    {" "}
                    “Travel doesn't become adventure until you leave yourself
                    behind” ~Marty Rubin{" "}
                  </p>
                  <hr />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="col-md-12 text-right">
                  <h1 className="display-3 text-center">Sign Up</h1>
                  <p className="leads text-center">
                    Create your MapTripy account
                  </p>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Email Address"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Confirm Password"
                        name="password2"
                        value={this.state.password2}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <input
                      type="submit"
                      className="btn btn-info btn-block mt-4"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
