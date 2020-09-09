import React, { Component } from "react";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import "../slick/slick.css";
import "../slick/slick-theme.css";
import Slider from "react-slick";

class Khatra extends Component {
  render = () => {
    const settings = {
      centerMode: true,
      centerPadding: "25%",
      slidesToShow: 1,
      arrows: true,

      autoplaySpeed: 1500,
      prevArrow: '<button type="button" className="slick-prev"></button>',
      nextArrow: '<button type="button" className="slick-next"></button>',
      initialSlide: 1,
      cssEase: "ease-in-out",
      infinite: true,
      focusOnSelect: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      autoplay: true
    };

    return (
      <div>
        <section className="section-slider">
          <Slider {...settings}>
            <div className="slick-box">
              <div className="child">
                <div className="image1"> </div>
              </div>
              <div className="child">
                {" "}
                <div className="image2"> </div>
              </div>
              <div className="child">
                <div className="image3"> </div>
              </div>
              <div className="child">
                <div className="image4"> </div>
              </div>
              <div className="child">
                <div className="image5"> </div>
              </div>
              <div className="child">
                <div className="image6"> </div>
              </div>
              <div className="child">
                <div className="image7"> </div>
              </div>
              <div className="child">
                <div className="image8"> </div>
              </div>
            </div>
          </Slider>
        </section>

        <script type="text/javascript" src="js/all.js"></script>

        <br />
        <br />
        <br />

        <section>
          <h1>Trending bikes and cars</h1>

          <aside className="grid">
            <div className="grid-item">
              <h3 style="font-weight: bolder;">Image:</h3>
              <br />
              <img src="pictures/Bajaj Pulsar NS200.webp" className="img" />
            </div>
            <div className="grid-item">
              <h3 style="font-weight: bolder;">
                Bajaj Pulsar NS200: Description:
              </h3>
              <br />
              Price: 3,18,900 Nrs <br />
              Engine Capacity: 199.5 cc <br />
              Max Power: 23.17 bhp @ 9500 rpm <br />
              Mileage: 35 Kmpl
              <br />
              Starting Mechanism: Self Start
              <br />
              Ignition: Carburetor <br />
              Fuel Tank Capacity: 12 L <br />
              No.of gears: 6 Gears
              <br />
              No.of cylinders: 1<br />
              Cooling System: Liquid Cooled
            </div>
          </aside>

          <aside className="grid">
            <div className="grid-item">
              <h3 style="font-weight: bolder;">Image:</h3>
              <br />
              <img src="pictures/Ford EcoSport.webp" className="img" />
            </div>
            <div className="grid-item">
              <h3 style="font-weight: bolder;">Ford EcoSport: Description:</h3>
              <br />
              Price: 36 - 51Lakh Nrs <br />
              Engine Capacity: 999/1498/1497 cc <br />
              Max Power: 123/99/120 bhp <br />
              Mileage: 14.8 - 23 Kmpl
              <br />
              Fuel: Petrol/ Diesel
              <br />
              Transmission: Manual/ Automatic
              <br />
              Boot Space: 352 mm <br />
              No.of cylinders: 3<br />
              Engine Type: 1.5l Ti-VCT Petrol Engine{" "}
            </div>
          </aside>
          <button type="button" className="button">
            <a href="html/Trending.html">See more</a>
          </button>
          <br />
          <br />
          <br />
        </section>

        <form className="form" id="form">
          <fieldset>
            <legend></legend>
            <h2 style="text-align: center; padding: 10px;">Leave a reply</h2>
            <br />
            <div className="grid1">
              <div className="grid-item1">
                <div>
                  <label for="">Name:</label>
                  <br />
                  <input type="text" id="name" value="" required />
                  <br />
                  <br />
                </div>

                <div>
                  <label for="">Email:</label>
                  <br />
                  <input type="Email" id="email" value="" required />
                  <br />
                  <br />
                </div>

                <div className="flex">
                  <input type="submit" name="" value="Submit" id="submit" />
                </div>
              </div>

              <div className="grid-item1">
                <label foe="">Comment:</label>
                <br />
                <textarea
                  id="comment"
                  name="subject"
                  value=""
                  placeholder="Write something.."
                  style="height:200px"
                ></textarea>
              </div>
            </div>
          </fieldset>
        </form>

        <script src="js/index.js"></script>

        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/jquery.slick/1.5.0/slick.min.js"
        ></script>
        <script type="text/javascript"></script>
      </div>
    );
  };
}
export default Khatra;
