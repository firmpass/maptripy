import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteVisited } from "../../actions/profileActions";

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
        <h4 className="mb-4">Where I've Been</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Location</th>
              <th>Dates Traveled</th>
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
