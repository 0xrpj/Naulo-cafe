import React, { Component } from "react";

// import  Styles from '../css/index.css'

class Mains extends Component {
  componentDidMount = () => {
    window.addEventListener("scroll", this.myFunction);
  };

  myFunction = () => {
    var nav = document.getElementById("nav");
    var sticky = nav.offsetTop;
    if (window.pageYOffset <= sticky) {
      nav.classList.remove("sticky");
    } else {
      nav.classList.add("sticky");
    }
  };

  submit = e => {
    var checkdata = [];

    var form = document.getElementById("form");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let comment = document.getElementById("comment");
    let btn = document.getElementById("submit");
    let reset = document.getElementById("reset");

    e.preventDefault();
    let formData = {
      name: name.value,
      email: email.value,
      comment: comment.value
    };

    console.log("checkdataaaaaaaaaaaaaaaa" + checkdata);

    if (!localStorage.getItem("dataplay")) {
      checkdata.push(formData);

      localStorage.setItem("dataplay", JSON.stringify(checkdata));
    } else {
      let checkdata = JSON.parse(localStorage.getItem("dataplay"));
      checkdata.push(formData);

      localStorage.setItem("dataplay", JSON.stringify(checkdata));
    }

    e.target.reset();
  };

  render = () => {
    return (
      <section>
        <style>@import url('../css/index.css')</style>

        <script type="text/javascript" src="../js/all.js"></script>

        <br />
        <br />
        <br />

        <section>
          <h1>Trending bikes and cars</h1>

          <aside className="grid">
            <div className="grid-item">
              <h3 style={{ fontWeight: "bolder" }}>Image:</h3>
              <br />
              <img src="pictures/Bajaj Pulsar NS200.webp" className="img" />
            </div>
            <div className="grid-item">
              <h3 style={{ fontWeight: "bolder" }}>
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
              <h3 style={{ fontWeight: "bolder" }}>Image:</h3>
              <br />
              <img src="pictures/Ford EcoSport.webp" className="img" />
            </div>
            <div className="grid-item">
              <h3 style={{ fontWeight: "bolder" }}>
                Ford EcoSport: Description:
              </h3>
              <br />
              Price: 36 - 51 Lakh Nrs <br />
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
              Engine Type: 1.5 l Ti-VCT Petrol Engine{" "}
            </div>
          </aside>
          <button type="button" className="button">
            <a href="html/Trending.html">See more</a>
          </button>
          <br />
          <br />
          <br />
        </section>

        <form className="form" id="form" onSubmit={this.submit}>
          <fieldset>
            <legend></legend>
            <h2 style={({ textAlign: "center" }, { padding: "10px" })}>
              Leave a reply
            </h2>
            <br />
            <div className="grid1">
              <div className="grid-item1">
                <div>
                  <label for="">Name:</label>
                  <br />
                  <input type="text" id="name" required />
                  <br />
                  <br />
                </div>

                <div>
                  <label for="">Email:</label>
                  <br />
                  <input type="Email" id="email" required />
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
                  placeholder="Write something.."
                  style={{ height: "200px" }}
                ></textarea>
              </div>
            </div>
          </fieldset>
        </form>

        <script src="../js/index.js"></script>
      </section>
    );
  };
}

export default Mains;
