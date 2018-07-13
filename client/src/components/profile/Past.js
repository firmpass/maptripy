import React, { Component } from "react";

class Past extends Component {
  render() {
    return (
      <div className="add-past">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <a href="feed.html" className="btn btn-light">
                Go Back
              </a>
              <h1 className="display-4 text-center">Where Have You Been.</h1>
              <p className="lead text-center">
                Add any places you have visited.
              </p>
              <small className="d-block pb-3">* = required field</small>
              <form action="login.html">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="* location"
                    name="past-location"
                    required
                  />
                </div>
                <h6>When did you go?</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="from"
                  />
                </div>
                <h6>When did you return?</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="to"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="What did you do"
                    name="description"
                  />
                  <small className="form-text text-muted">
                    What did you do when you visited?
                  </small>
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
export default Past;
