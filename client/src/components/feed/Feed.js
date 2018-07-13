import React, { Component } from "react";

class Feed extends Component {
  render() {
    return (
      <div className="container">
        <section className="sidebar">
          <div id="connect">
            {/* <img className="" style="width: 100%" src="https://www.gravatar.com/avatar/anything?s=200&d=mm" /> */}
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
        <div className="feed">
          <div className="container">
            <div className="row">
              <div className="column">
                <div className="col-md-5 text-left">
                  <a className="nav-link" href="profile.html">
                    {/* <!-- <img className="" style="width: 150px;margin-right:5px" src="https://www.gravatar.com/avatar/anything?s=200&d=mm" /> --> */}
                  </a>
                  {/* <!-- <br /> */}
                  {/* <p className="text-left">Name: Jack Lin</p>
      <p className="text-left">Age: 25</p> --> */}
                </div>
              </div>
              {/* <!-- <div className="column"> --> */}
              <div className="col-md-18">
                {/* <!-- Post Form --> */}
                <div className="post-form mb-3">
                  <div className="card card-info">
                    <div className="card-header bg-info text-white">
                      Say Somthing...
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="form-group">
                          <textarea
                            className="form-control form-control-lg"
                            placeholder="Create a post"
                          />
                        </div>
                        <button type="submit" className="btn btn-dark">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                {/* <!-- Post Feed --> */}
                <div className="posts">
                  {/* <!-- Post Item --> */}
                  <div className="card card-body mb-3">
                    <div className="row">
                      <div className="col-md-2">
                        <a href="profile.html">
                          <img
                            className="rounded-circle d-none d-md-block"
                            src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
                            alt=""
                          />
                        </a>
                        <br />
                        <p className="text-center">Jack Lin</p>
                      </div>
                      <div className="col-md-10">
                        <p className="lead">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sint possimus corporis sunt necessitatibus!
                          Minus nesciunt soluta suscipit nobis. Amet accusamus
                          distinctio cupiditate blanditiis dolor? Illo
                          perferendis eveniet cum cupiditate aliquam?
                        </p>
                        <button type="button" className="btn btn-light mr-1">
                          <i className="text-info fas fa-thumbs-up" />
                          <span className="badge badge-light">4</span>
                        </button>
                        <button type="button" className="btn btn-light mr-1">
                          <i className="text-secondary fas fa-thumbs-down" />
                        </button>
                        <a href="post.html" className="btn btn-info mr-1">
                          Comments
                        </a>
                        {/* <!-- <button type="button" className="btn btn-danger mr-1">
              <i className="fas fa-times" />
            </button> --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Feed;
