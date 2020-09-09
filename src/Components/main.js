import React, { Component } from "react";
import "../slick/slick.css";
import "../slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      link: "/menu"
    };
  }

  sendme = evv => {
    evv.preventDefault();
    const comment = document.getElementById("comment").value;
    const name = document.getElementById("cname").value;
    let data = { name: name, comment: comment };
    if (name !== "" && comment !== "") {
      axios
        .post("http://localhost:5555/comments", data)
        .then(res => {
          alert("Thank you for your feedback, " + name.toLowerCase() + " !");
        })
        .catch(error => {
          alert("Something went wrong :(");
        });
    } else {
      alert("Both fields are required :D");
    }
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);

    // $(window).on("load", function() {
    //   $(".loader-wrapper").fadeOut("slow");

    // });

    setInterval(() => {
      $("#welcomebutto").html(
        'Explore 📱 <i className="fas fa-angle-double-right"></i>'
      );
      this.setState({
        link: "/contact"
      });
    }, 5000);

    setInterval(() => {
      $("#welcomebutto").html(
        'Explore 🪑 <i className="fas fa-angle-double-right"></i>'
      );
      this.setState({
        link: "/booking"
      });
    }, 10000);

    setInterval(() => {
      $("#welcomebutto").html(
        'Explore 🖼️ <i className="fas fa-angle-double-right"></i>'
      );
      this.setState({
        link: "/gallery"
      });
    }, 15000);

    setInterval(() => {
      $("#welcomebutto").html(
        'Explore  📅 <i className="fas fa-angle-double-right"></i>'
      );
      this.setState({
        link: "/events"
      });
    }, 20000);
  };

  render() {
    const settings = {
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 904,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 504,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };

    return (
      <>
        <main className="container">
          <section className="main">
            <img src="images/cover.jpg" className="coverpic" alt="coverpic" />

            <span className="text-title" id="fpage">
              Welcome to Naulo Cafe!{" "}
              <span role="img" aria-label="cafe">
                🏡
              </span>
            </span>

            <h2 id="mainh2">
              <span
                className="typer"
                id="fpage-motto"
                data-words="Taste and satisfaction is our utmost priority!, We dedicate our heart and soul to every food we make!"
                data-delay="100"
                data-deletedelay="1000"
              ></span>
            </h2>

            <div className="mouse">
              <img src="images/mouse.gif" alt="mouse" />
            </div>
            {/* <div className="loader-wrapper">
              <span className="loader">
                <span className="loader-inner"></span>
              </span>
            </div> */}

            <Link to={this.state.link} id="changeHref">
              <button id="welcomebutto">
                Explore
                <span role="img" aria-label="cafe">
                  🍨
                </span>
                <i className="fas fa-angle-double-right"></i>
              </button>
            </Link>

            {/* <img src="images/bird.gif" className="bird" /> */}

            <h1 className="hotpicks">Hot picks from menu</h1>
            <h2>
              <div className="border"></div>

              <Link to="/menu" style={{ color: "black" }}>
                {/* <section className="hotmenu"> */}
                <section className="hotmenu">
                  <Slider {...settings}>
                    <div>
                      <img src="images/food/samosa.jpg" alt="samosa" />
                      Samosa
                    </div>
                    <div>
                      <img src="images/food/chowmein.jpg" alt="chowmein" />
                      Chowmein
                    </div>
                    <div>
                      <img src="images/food/fish.jpeg" alt="fish curry" />
                      Fish curry
                    </div>
                    <div>
                      <img src="images/food/momo.jpg" alt="steam momo" />
                      Steam MO:MO
                    </div>
                    <div>
                      <img src="images/food/coffee.jpg" alt="coffee" />
                      Coffee
                    </div>
                    <div>
                      <img src="images/food/tea.jpg" alt="green tea" />
                      Green tea
                    </div>
                    <div>
                      <img
                        src="images/food/meat.jpg"
                        alt="chicken fried meat"
                      />
                      Chicken fried meat
                    </div>
                    {/* </section> */}
                  </Slider>
                </section>
              </Link>
            </h2>

            <h1 className="mainh1">We bring people closer with food!</h1>
            <div className="border"></div>

            <div className="homebooking">
              <div className="wantTable">
                <span id="span1">Want to book a table? </span>
                <Link to="/booking">
                  <span id="span2">Yes !?</span>
                </Link>
              </div>
            </div>
            <div className="clearboth"></div>

            <section className="testimonials">
              <div className="inner">
                <h1>What our customers say!</h1>
                <div className="border"></div>

                <div className="row">
                  <div className="col">
                    <div className="testimonial">
                      <img src="images/p1.png" alt="puspakamal" />
                      <div className="name">पुष्पकमल दाहाल</div>
                      <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </div>

                      <p>
                        मने निस्चित रुपमा भन्नुपर्दा क्याफे चै राम्रै हो । म
                        फेरी पनि छिट्टै आउने प्रयास गर्नेछु । स्वागत पनि राम्रै
                        सँग गरियो । मने अब जङ्गल हैन क्याफे पस्छु ।
                      </p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="testimonial">
                      <img src="images/p2.png" alt="sushil" />
                      <div className="name">सुशिल कोइराला</div>
                      <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half" aria-hidden="true"></i>
                      </div>

                      <p>
                        चिया त मिठो थियो तर जिब्रो नै पोल्यो अब अर्को चोटी देखी
                        अलिक चिसो पारेर दिनुहोला । अरु त ठिकै छ ।
                      </p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="testimonial">
                      <img src="images/p3.png" alt="kp" />
                      <div className="name">केपी ओली </div>
                      <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </div>

                      <p>
                        मलाई यो क्याफे मनपर्‍यो अब म यहाँ पाएपबाट ग्यास दिन्छु र
                        यो क्याफेको मालिकलाई नेपालमा पानीजहाज आएसी घुमाउन लान्छु
                        ।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <h1 id="htmlh1">
              We are partnered with
              <div className="border"></div>
            </h1>

            <section className="partners">
              <img src="images/foodmandu.webp" alt="samosa" />
              <img src="images/bhoj.webp" alt="samosa" />
              <img src="images/coca-cola.webp" alt="samosa" />
              <img src="images/b.webp" alt="samosa" />
            </section>
            <h1 id="htmlh1">Leave a review</h1>
            <div className="border"></div>
            <div className="review">
              <label htmlFor="cname">
                <p style={{ textAlign: "center" }}>Your name :</p>{" "}
              </label>
              <input type="text" id="cname" required />
              <br />
              <label htmlFor="comment">
                <p style={{ textAlign: "center" }}>Review: </p>
              </label>
              <textarea type="text" id="comment" required />

              <div className="pushdown">
                <button
                  id="Sendit"
                  onClick={ee => {
                    this.sendme(ee);
                  }}
                >
                  GO
                </button>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}
