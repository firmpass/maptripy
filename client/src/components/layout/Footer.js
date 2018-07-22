import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer
        className="footer bg-dark text-white mt-5 p-4 text-center"
        style={{
          backgroundColor: "#F8F8F8",
          borderTop: "0px solid #E7E7E7",
          textAlign: "center",
          padding: "0px",
          position: "absolute",
          left: "0",
          bottom: "-100px",
          height: "60px",
          width: "100%"
        }}
      >
        Copyright &copy; {new Date().getFullYear()} MapTripy
      </footer>
    );
  }
}

export default Footer;
