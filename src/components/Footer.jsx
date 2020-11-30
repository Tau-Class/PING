import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row no-gutters justify-content-center align-items-center">
          <div className="col-lg-3">
            <div className="brand">
              <h3>PING</h3>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="icon-bar">
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-linkedin"></a>
              <a href="#" className="fa fa-instagram"></a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="copyright">
              <p>©Tau Class 2020.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
