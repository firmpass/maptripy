import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteVisited } from "../../actions/profileActions";
import passport from "../../img/passport.png";
import calander from "../../img/calander.png";
import map from "../../img/map.png";

class Visited extends Component {
  onDeleteClick(id) {
    this.props.deleteVisited(id);
  }

  render() {
    const visited = this.props.visited.map(vis => (
      <tr key={vis._id}>
        <td>{vis.location}</td>
        <td>
          <Moment format="MM/DD/YYYY">{vis.from}</Moment> -
          <Moment format="MM/DD/YYYY">{vis.to}</Moment>
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, vis._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="text-center mb-4">
          <img
            src={passport}
            style={{ width: "35px", margin: "auto", display: "round" }}
          />Where I've Been
        </h4>
        <table className="text-center table">
          <thead>
            <tr>
              <th>
                <img
                  src={map}
                  style={{ width: "35px", margin: "auto", display: "round" }}
                />
                Location
              </th>
              <th>
                <img
                  src={calander}
                  style={{ width: "35px", margin: "auto", display: "round" }}
                />
                Dates Traveled
              </th>
              <th />
            </tr>
            {visited}
          </thead>
        </table>
      </div>
    );
  }
}

Visited.propTypes = {
  deleteVisited: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteVisited }
)(Visited);
