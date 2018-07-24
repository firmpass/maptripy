import React from "react";
import { Link } from "react-router-dom";
import user from "../../img/users.png";
import checklist from "../../img/checklist.png";
import passport from "../../img/passport.png";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <img
          src={user}
          style={{ width: "35px", margin: "auto", display: "round" }}
          alt="Loading..."
        />{" "}
        Edit Profile
      </Link>
      <Link to="/add-visited" className="btn btn-light">
        <img
          src={passport}
          style={{ width: "35px", margin: "auto", display: "round" }}
          alt="Loading..."
        />
        Add to My Trips
      </Link>
      <Link to="/add-bucketlist" className="btn btn-light">
        <img
          src={checklist}
          style={{ width: "35px", margin: "auto", display: "round" }}
          alt="Loading..."
        />
        Add to Bucketlist
      </Link>
    </div>
  );
};

export default ProfileActions;
