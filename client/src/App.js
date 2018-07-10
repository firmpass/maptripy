import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Navbar from "../src/components/layout/Navbar";
import Landing from "../src/components/layout/Landing";
import Footer from "../src/components/layout/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
