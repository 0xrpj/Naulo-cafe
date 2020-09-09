import React, { Component } from "react";

export default class Gallery extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <div className="main">
          <p className="text-title">Our gallery <span role="img" aria-label="camera">📷</span></p>
          <div className="gallery">
            <div className="gallery1">
              <a href="../images/gallery1.jpg" data-lightbox="mygallery">
                <img alt="" src="../images/gallery1.jpg" width="350px" />
              </a>
            </div>

            <div className="gallery2">
              <a href="../images/gallery3.jpg" data-lightbox="mygallery">
                <img alt="" src="../images/gallery3.jpg" width="350px" />
              </a>
            </div>

            <div className="gallery3">
              <a href="../images/Gallery4.jpg" data-lightbox="mygallery">
                <img alt="" src="../images/Gallery4.jpg" width="350px" />
              </a>
            </div>

            <div className="gallery4">
              <a href="../images/gallery5.jpg" data-lightbox="mygallery">
                <img alt="" src="../images/gallery5.jpg" width="350px" />
              </a>
            </div>

            <div className="gallery1">
              <a href="../images/gallery1.jpg" data-lightbox="mygallery">
                <img alt="" src="../images/gallery1.jpg" width="350px" />
              </a>
            </div>

            <div className="gallery2">
              <a href="../images/gallery3.jpg" data-lightbox="mygallery">
                <img alt="" src="../images/gallery3.jpg" width="350px" />
              </a>
            </div>

            <div className="gallery3">
              <a href="../images/Gallery4.jpg" data-lightbox="mygallery">
                <img alt="" src="../images/Gallery4.jpg" width="350px" />
              </a>
            </div>

            <div className="gallery4">
              <a href="../images/gallery5.jpg" data-lightbox="mygallery">
                <img alt="" src="../images/gallery5.jpg" width="350px" />
              </a>
            </div>
          </div>
        </div>
        <div className="menu-down"></div>
      </>
    );
  }
}
