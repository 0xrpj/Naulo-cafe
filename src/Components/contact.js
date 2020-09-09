import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  submit = ev => {
    if (localStorage.ContactData === undefined) {
      localStorage.setItem("ContactData", JSON.stringify([]));
    }
    ev.preventDefault();
    let storage = JSON.parse(localStorage.getItem("ContactData"));
    let contactname = document.getElementById("contname").value;
    let contactphno = document.getElementById("contph").value;
    let contactemail = document.getElementById("contemail").value;
    let contactsubject = document.getElementById("contsub").value;
    let contactmessage = document.getElementById("contmessage").value;

    let ob = {
      Name: contactname,
      "Phone number": contactphno,
      Email: contactemail,
      Subject: contactsubject,
      Message: contactmessage
    };
    storage.push(ob);
    localStorage.setItem("ContactData", JSON.stringify(storage));
    ev.target.reset();
  };

  render() {
    return (
      <>
        <div className="main">
          <p className="text-title" id="title">
            Contact us ✆
          </p>
          <div className="makeflex">
            <div className="wrapper">
              <div className="content">
                <h1>Get in touch!</h1>
                <p>Connect with us by sending your views.</p>
              </div>
              <form
                className="form"
                id="form"
                onSubmit={e => {
                  this.submit(e);
                }}
              >
                <div className="top-form">
                  <div className="inner-form">
                    <div className="label">Name</div>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      id="contname"
                      required
                    />
                  </div>
                  <div className="inner-form">
                    <div className="label">Email</div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      id="contemail"
                      required
                    />
                  </div>
                  <div className="inner-form">
                    <div className="label">Phone</div>
                    <input
                      type="text"
                      placeholder="Enter your phone no."
                      id="contph"
                    />
                  </div>
                </div>
                <div className="middle-form">
                  <div className="inner-form">
                    <div className="label">Subject</div>
                    <input
                      type="text"
                      placeholder="Enter the subject"
                      id="contsub"
                    />
                  </div>
                </div>
                <div className="bottom-form">
                  <div className="inner-form">
                    <div className="label">Message</div>
                    <textarea
                      placeholder="Enter your message"
                      id="contmessage"
                    ></textarea>
                  </div>
                </div>
                <input className="sendit" type="submit" value="submit" />
              </form>
            </div>
            <div className="wrapper2">
              <span>Contact Information</span>
              <br />

              <Link to="/maps">
                <p>Naulo Cafe Pvt. Ltd</p>
                <p>
                  Address : Chabahil, Kathmandu, Nepal
                  <br />
                  View in maps
                </p>
                <img
                  src="images/map.png"
                  alt=""
                  style={{ width: "90px" }}
                ></img>
              </Link>
              <p>Phone number : 9840378984</p>
              <p>Email : roshanparajuli@naulocafe.com</p>
              <p>We are open everyday from 7AM to 11PM. </p>
              <p>
                Follow us on : <br />
                <a
                  href="https://www.facebook.com/rsnpj"
                  className="links"
                  target="_blank"
                  rel ="noopener noreferrer"
                >
                  <span>Facebook</span>
                  <i className="fab fa-facebook-f " aria-hidden="true"></i>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.twitter.com/rsnpj"
                  className="links"
                  target="_blank"
                  rel ="noopener noreferrer"
                >
                  <span>Twitter </span>
                  <i className="fab fa-twitter " aria-hidden="true"></i>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.instagram.com/rsnpj"
                  className="links"
                  target="_blank"
                  rel ="noopener noreferrer"
                >
                  <span>Instagram </span>
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </p>

              {/* <p> Rate us at :</p>
              <a
                href="https://www.tripadvisor.com/Restaurant_Review-g293890-d14991982-Reviews-Naulo_Restaurant-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Rating</span>
                <img
                  alt=""
                  src="http://www.diningpark.com.np/site/img/tripadvisor.png"
                  style={{ width: "300px" }}
                />
              </a> */}
            </div>
          </div>
        </div>
        {/* <Mains /> */}
      </>
    );
  }
}
