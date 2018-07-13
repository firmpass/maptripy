import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-6" />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-body bg-info text-white mb-3">
                    <div className="row">
                      <div className="col-4 col-md-3 m-auto">
                        <img
                          className="rounded-circle"
                          src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h1 className="display-4 text-center">Jack lin</h1>
                      <p>Atlanta, GA</p>
                      <p>
                        <a className="text-white p-2" href="#">
                          <i className="fab fa-twitter fa-2x" />
                        </a>
                        <a className="text-white p-2" href="#">
                          <i className="fab fa-facebook fa-2x" />
                        </a>
                        <a className="text-white p-2" href="#">
                          <i className="fab fa-instagram fa-2x" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="card card-body bg-light mb-3">
                    <h3 className="text-center text-info">Jack's Bio</h3>
                    <p className="lead">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Provident fuga cum necessitatibus blanditiis vel, officia
                      facere porro esse numquam assumenda doloremque saepe
                      aliquam nemo excepturi aliquid maiores! Excepturi, libero
                      repudiandae.
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <h3 className="text-center text-info">Where I have Visited</h3>
                <ul className="list-group">
                  <li className="list-group-item">
                    <h4>China</h4>
                    <p>Oct 8, 2005 - Dec 12, 2005</p>
                    <p>
                      <strong>What I did:</strong> Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Unde doloribus dicta enim
                      excepturi laborum voluptatem nam provident quisquam
                      facere. Quae?
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h3 className="text-center text-info">Bucketlist</h3>
                <ul className="list-group">
                  <li className="list-group-item">
                    <h4>Japan</h4>
                    <p>Sep 2019</p>
                    <p>
                      <strong>What to do:</strong> Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Unde doloribus dicta enim
                      excepturi laborum voluptatem nam provident quisquam
                      facere. Quae?
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
