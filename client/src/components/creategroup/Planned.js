import React, { Component } from "react";

class Planned extends Component {
  render() {
    return (
      <div className="container">
        <section className="sidebar">
          <div id="connect">
            <img
              className=""
              style="width: 100%"
              src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
            />
            <p className="text-left">Name: Jack Lin</p>
            <p className="text-left">Age: 25</p>

            <li className="nav-item">
              <a className="nav-link" href="profile.html">
                {" "}
                Profile
              </a>
              <a className="nav-link" href="planned.html">
                {" "}
                Current Groups
              </a>
              <a className="nav-link" href="tips.html">
                {" "}
                Travel Tips
              </a>
            </li>
          </div>
        </section>
        <div className="container ">
          <div className="row">
            <div className="col-md-6">
              <h3 className="text-center text-info" />
              <ul className="list-group">
                <li className="list-group-item">
                  <h3>Group Name: </h3>
                  <strong>Location:</strong> Japan
                  <p>
                    <strong>Departure: </strong>Sep 8, 2018
                    <strong>Return: </strong> Oct 1, 2018
                  </p>
                  <p>
                    <strong>Tripy Do:</strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Unde doloribus dicta enim
                    excepturi laborum voluptatem nam provident quisquam facere.
                    Quae?
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3 className="text-center text-info" />
              <ul className="list-group">
                <li className="list-group-item">
                  <h3>Group Name: </h3>
                  <strong>Location:</strong> Japan
                  <p>
                    <strong>Departure: </strong>Sep 8, 2018
                    <strong>Return: </strong> Oct 1, 2018
                  </p>
                  <p>
                    <strong>Tripy Do:</strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Unde doloribus dicta enim
                    excepturi laborum voluptatem nam provident quisquam facere.
                    Quae?
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3 className="text-center text-info" />
              <ul className="list-group">
                <li className="list-group-item">
                  <h3>Group Name: </h3>
                  <strong>Location:</strong> Japan
                  <p>
                    <strong>Departure: </strong>Sep 8, 2018
                    <strong>Return: </strong> Oct 1, 2018
                  </p>
                  <p>
                    <strong>Tripy Do:</strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Unde doloribus dicta enim
                    excepturi laborum voluptatem nam provident quisquam facere.
                    Quae?
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3 className="text-center text-info" />
              <ul className="list-group">
                <li className="list-group-item">
                  <h3>Group Name: </h3>
                  <strong>Location:</strong> Japan
                  <p>
                    <strong>Departure: </strong>Sep 8, 2018
                    <strong>Return: </strong> Oct 1, 2018
                  </p>
                  <p>
                    <strong>Tripy Do:</strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Unde doloribus dicta enim
                    excepturi laborum voluptatem nam provident quisquam facere.
                    Quae?
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Planned;
