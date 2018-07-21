import React, { Component } from "react";

// var style = {
//   backgroundColor: "#F8F8F8",
//   borderTop: "1px solid #E7E7E7",
//   textAlign: "center",
//   padding: "20px",
//   position: "fixed",
//   left: "0",
//   bottom: "0",
//   height: "60px",
//   width: "100%"
// };
// </style>

class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-dark text-white mt-5 p-4 text-center">
        Copyright &copy; {new Date().getFullYear()} MapTripy
      </footer>
    );
  }
}

export default Footer;
