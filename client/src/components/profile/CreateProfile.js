import React, { Component } from "react";

class CreateProfile extends Component {
  render() {
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <a href="feed.html" className="btn btn-light">
                Go Back
              </a>
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">Tell us about yourself!</p>
              <small className="d-block pb-3">* = required field</small>
              <form action="profile.html">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="* Profile handle"
                    name="handle"
                    value=""
                    required
                  />
                  <small className="form-text text-muted">
                    UserName (This CAN'T be changed later)
                  </small>
                </div>
                {/* <div className="form-group">
              <select className="form-control form-control-lg" placeholder="How often do you go on vacations?" name="status">
                <option value="I have not taken a vacaion yet">I have not taken a vacaion at all</option>
                <option value="I am always on vacation">I am always on vacation</option>
                <option value="Once a Month">Once a Month</option>
                <option value="Every Couple Months">Every Couple Months</option>
                <option value="3-4 times a year">3-4 times a year</option>
                <option value="1-2 times a year">1-2 times a year</option>
                <option value="Prefer not to answer">Prefer not to answer</option>
              </select>
              <small className="form-text text-muted">How often do you go on vacations?</small>
            </div> */}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="New York, NY"
                    name="location"
                    value=""
                  />
                  <small className="form-text text-muted">
                    What is your Current Location City & state suggested
                  </small>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="A short bio of yourself"
                    name="bio"
                  />
                  <small className="form-text text-muted">
                    Tell us a little about yourself
                  </small>
                </div>

                <div className="mb-3">
                  <button type="button" className="btn btn-light">
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fab fa-twitter" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Twitter Profile URL"
                    name="twitter"
                  />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fab fa-facebook" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Facebook Page URL"
                    name="facebook"
                  />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fab fa-youtube" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="YouTube Channel URL"
                    name="youtube"
                  />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fab fa-instagram" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Instagram Page URL"
                    name="instagram"
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateProfile;
