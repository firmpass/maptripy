import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="column">
                <div className="col-md-12 text-left">
                  <h1 className="display-3 text-center">MapTripy</h1>

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
                  <form action="create-profile.html">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        name="password"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Confirm Password"
                        name="password2"
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
