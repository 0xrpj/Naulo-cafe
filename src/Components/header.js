import React, { Component } from "react";
import { Link } from "react-router-dom";
// import $ from "jquery";
// import ResponsiveMenu from 'react-responsive-navbar';

export default class Header extends Component {
  removemenu = () => {
    var x = document.querySelector("input[type=checkbox");
    x.checked = false;
  };

  render() {
    return (
      <>
        <header>
          <img alt="" src="/images/mainlogo.png" />
          <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              {/* <i className="fas fa-bars"></i> */}
              <span className="togglepointer">
                <span className="bars"></span>
              </span>
            </label>
            <ul className="navbar">
              <Link to="/" onClick={this.removemenu}>
                <li className="active">Home</li>
              </Link>

              <Link to="/ourstory" onClick={this.removemenu}>
                <li>Our story</li>
              </Link>

              <Link to="/contact" onClick={this.removemenu}>
                <li>Contact us</li>
              </Link>

              <Link to="/menu" onClick={this.removemenu}>
                <li>Menu</li>
              </Link>

              <Link to="/gallery" onClick={this.removemenu}>
                <li>Gallery</li>
              </Link>

              <Link to="/booking" onClick={this.removemenu}>
                <li>Booking</li>
              </Link>

              <Link to="/events" onClick={this.removemenu}>
                <li>Events</li>
              </Link>

              <li className="toggle2">
                <span className="cross"></span>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}
