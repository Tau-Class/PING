import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
          <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"></span>
            <a className="navbar-brand d-none d-lg-inline-block" href="/">PING</a>

            <div className="w-100 text-right">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div
            className="collapse navbar-collapse flex-grow-1 text-right"
            id="myNavbar"
          >
            <ul className="navbar-nav ml-auto flex-nowrap">
              <li className="nav-item">
                  <a className="nav-link m-2 menu-item nav-active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-2 menu-item" href="/Features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-2 menu-item" href="/About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-2 menu-item" href="About#Contact-Us">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
