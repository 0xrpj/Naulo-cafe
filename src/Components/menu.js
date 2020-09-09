import React, { Component } from "react";
import "../slick/slick.css";
import "../slick/slick-theme.css";
import Slider from "react-slick";

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      mode: "0"
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  search = () => {
    var i;
    var datagiven = document.getElementById("searchit").value;
    if (datagiven === "") {
      let errorcontent = `<h2>No results found!</h2>`;
      let closeme = `<br><br><span class="closeit" onclick="toggle()"> <div id="continue">Continue     <i class="fas fa-angle-double-right" aria-hidden="true"></i></div></span>`;
      document.getElementById("popup").innerHTML = errorcontent + closeme;
    } else {
      for (i = 1; i < 26; i++) {
        fetch(`http://localhost:5555/menu/${i}`)
          .then(response => response.json())
          .then(data => {
            if (data.name.toLowerCase() === datagiven.toLowerCase()) {
              console.log("Mode inside if is " + this.state.mode);
              let searchcontent = `<div class="popupmenu"><b><h2> ${data.name} </h2></b><br>
              ${data.priceCurrency} ${data.price}<br>
              <img src="${data.image}" class="popupimage"><br>
              <p style="text-align:justify">${data.description} </p>
              <br>
              <p>Discount: ${data.discount} </p><br><br>`;
                          let closeme = `<p class="closeme" onclick="toggle()"> <img
              src="cross.png"
              style="width: 20px"
              alt=""
              /></p></div>`;
              document.getElementById("popup").innerHTML =
                searchcontent + closeme;
            }
          });
      }
      console.log(this.state.mode);
    }
  };

  toggle = () => {
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
    let errorcontent = `<h2>No results found!</h2>`;
    let closeme = `<br><br><span class="closeit" onclick="toggle()"> <div id="continue">Continue <i class="fas fa-angle-double-right" aria-hidden="true"></i></div></span>`;
    document.getElementById("popup").innerHTML = errorcontent + closeme;
  };

  togglethat = () => {
    this.toggle();
  };

  show = e => {
    let id = e.target.getAttribute("data-id");
    fetch(`http://localhost:5555/menu/${id}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data.name)
        let content = `<div class="popupmenu"><b><h2> ${data.name} </h2></b><br>
  ${data.priceCurrency} ${data.price}<br>
 <img src="${data.image}" class="popupimage"><br>
 <p style="text-align:justify">${data.description} </p>
 <br>
 <p>Discount: ${data.discount} </p><br><br>`;
        let closeme = `<p class="closeme" onclick="toggle();"> <img
        src="cross.png"
        style="width: 20px"
        alt=""
      /></p></div>`;
        document.getElementById("popup").innerHTML = content + closeme;
      });
  };

  render() {
    const settings = {
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1
    };

    return (
      <>
        <div className="main" id="blur">
          <p className="text-title" id="menu-title">
            Have a look at our menu{" "}
            <span role="img" aria-label="menu">
              📝
            </span>
          </p>

          <div className="hotmenus">
            <Slider {...settings}>
              <div>
                <img alt="" src="images/food/samosa.jpg" />
                Samosa
              </div>
              <div>
                <img alt="" src="images/food/chowmein.jpg" />
                Chowmein
              </div>
              <div>
                <img alt="" src="images/food/fish.jpeg" />
                Fish curry
              </div>
              <div>
                <img alt="" src="images/food/momo.jpg" />
                Steam MO:MO
              </div>
              <div>
                <img alt="" src="images/food/coffee.jpg" />
                Coffee
              </div>
              <div>
                <img alt="" src="images/food/tea.jpg" />
                Green tea
              </div>
              <div>
                <img alt="" src="images/food/meat.jpg" />
                Chicken fried meat
              </div>
              {/* </div> */}
            </Slider>
          </div>
          <br />

          <div className="searchboxa">
            <label htmlFor="searchit">
              <p>What dish are you searching for?</p>
            </label>
            <input type="text" id="searchit" />
            <button
              id="searchnow"
              onClick={ev => {
                this.toggle();
                this.search(ev);
              }}
            >
              GO
            </button>
          </div>

          <br />
          <br />
          <div className="menu-wrap">
            <div className="menuwrap1">
              <div className="menu">
                <div className="eachone">
                  <a href="#ws"> Weekly special</a> <br />
                  <br />
                </div>
                <div className="eachone">
                  <a href="#bv"> Beverages</a> <br />
                  <br />
                </div>
                <div className="eachone">
                  <a href="#ds"> Desserts</a> <br />
                  <br />
                </div>
                <div className="eachone">
                  <a href="#it"> Indian Tadka</a> <br />
                  <br />
                </div>
                <div className="eachone">
                  <a href="#sld"> Salad</a> <br />
                  <br />
                </div>
              </div>
            </div>
            <div id="popup">
              <span className="closeme" onClick={this.toggle}>
                <h2>No results found!</h2>
                <br />
                <br />
                <span className="closeit" onClick={this.toogle}>
                  {" "}
                  <div id="continue">
                    Continue
                    <i
                      className="fas fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </span>
              </span>
            </div>
            <div className="menuside">
              <h1 id="ws">Weekly special</h1>
              <img
                alt=""
                src="../images/food/momo.jpg"
                data-id="1"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/chowmein.jpg"
                data-id="2"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/capa.jpg"
                data-id="3"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/popcorn.jpg"
                data-id="12"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/es.jpg"
                data-id="18"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />

              <h1 id="bv">Beverages</h1>
              <img
                alt=""
                src="../images/food/tea.jpg"
                data-id="4"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/coffee.jpg"
                data-id="5"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/lassi.jpg"
                data-id="6"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/oreo.jpg"
                data-id="10"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/mango.jpg"
                data-id="11"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <h1 id="ds">Desserts</h1>
              <img
                alt=""
                src="../images/food/ctic.jpg"
                data-id="13"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/iccd.jpg"
                data-id="14"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/bac.jpg"
                data-id="15"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/kicp.jpg"
                data-id="16"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/icst.jpg"
                data-id="17"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <h1 id="it">Indian Tadka</h1>
              <img
                alt=""
                src="../images/food/chickencurry.jpg"
                data-id="7"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/fish.jpeg"
                data-id="8"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/dalfry.jpg"
                data-id="9"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/samosa.jpg"
                data-id="19"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/bc.jpg"
                data-id="20"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <h1 id="sld">Salad</h1>
              <img
                alt=""
                src="../images/food/salad1.jpg"
                data-id="21"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/salad2.jpg"
                data-id="22"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/salad3.jpg"
                data-id="23"
                className="imagesonmenu"
                onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              {/* <img
                alt=""
                src="../images/food/salad4.jpg"
                data-id="24"
                className="imagesonmenu"
                  onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              />
              <img
                alt=""
                src="../images/food/salad5.jpg"
                data-id="25"
                className="imagesonmenu"
                  onClick={ev => {
                  this.toggle();
                  this.show(ev);
                }}
              /> */}
            </div>
          </div>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br />
      </>
    );
  }
}
