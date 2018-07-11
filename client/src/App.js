import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Navbar from "../src/components/layout/Navbar";
import Landing from "../src/components/layout/Landing";
import Footer from "../src/components/layout/Footer";
import Feed from "../src/components/feed/Feed";
import Create from "../src/components/creategroup/Create";
import Bucketlist from "../src/components/profile/Bucketlist";
import CreateProfile from "../src/components/profile/CreateProfile";
import Past from "../src/components/profile/Past";
import EditProfile from "../src/components/profile/EditProfile";
import Profile from "../src/components/profile/Profile";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/creategroup" component={Create} />
            <Route exact path="/bucketlist" component={Bucketlist} />
            <Route exact path="/createprofile" component={CreateProfile} />
            <Route exact path="/editprofile" component={EditProfile} />
            <Route exact path="/past" component={Past} />
            <Route exact path="/profile" component={Profile} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
