import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <p className="naulocafep">Naulo Cafe </p>
          <span id="copy">Copyright &copy; 2020. All rights reserved.</span>
          <br />
          <img
            alt=""
            src="https://img.pngio.com/cropped-cblanguages-faviconpng-coffee-break-languages-coffee-break-png-512_512.png"
            id="logohere"
          />

          <div id="followus">
            <h3>Follow us on : </h3>
            <br />
            <div className="follow_inner">
              <a href="https://www.facebook.com/rsnpj">
                <i className="fab fa-facebook-f"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://www.twitter.com/rsnpj">
                <i className="fab fa-twitter"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://www.instagram.com/rsnpj">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
