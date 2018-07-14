import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteBucketlist } from "../../actions/profileActions";

class Bucketlist extends Component {
  onDeleteClick(id) {
    this.props.deleteBucketlist(id);
  }

  render() {
    const bucketlist = this.props.bucketlist.map(fut => (
      <tr key={fut._id}>
        <td>{fut.location}</td>
        <td>
          <Moment format="YYYY/MM/DD">{fut.from}</Moment> -
          {fut.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{fut.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, fut._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Bucketlist</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Location</th>
              <th>Expected Departure</th>
              <th />
            </tr>
            {bucketlist}
          </thead>
        </table>
      </div>
    );
  }
}

Bucketlist.propTypes = {
  deleteBucketlist: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteBucketlist }
)(Bucketlist);
