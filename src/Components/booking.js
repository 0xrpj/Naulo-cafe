import React, { Component } from "react";

export default class booking extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  submit = ev => {
    if (localStorage.BookingData === undefined) {
      localStorage.setItem("BookingData", JSON.stringify([]));
    }
    ev.preventDefault();
    // let form = document.getElementsByName("book-from");
    let bookstorage = JSON.parse(localStorage.getItem("BookingData"));

    let bookname = document.querySelector("#userName").value;
    let bookphno = document.querySelector("#phnumber").value;
    let bookdate = document.querySelector("#bookdate").value;
    let booktime = document.querySelector("#booktime").value;
    let people = document.querySelector("#noofpeople").value;

    if (
      bookname === "" ||
      bookphno === "" ||
      bookdate === "" ||
      people === "" ||
      booktime === ""
    ) {
      alert("All fields are required !! :( ");
    } else {
      let obj = {
        Name: bookname,
        "Phone number": bookphno,
        Date: bookdate,
        Time: booktime,
        People: people
      };
      bookstorage.push(obj);
      localStorage.setItem("BookingData", JSON.stringify(bookstorage));
      document.getElementById("myForm").reset();
    }
  };

  render() {
    return (
      <>
        <div className="main">
          <p className="text-title" id="title">
            Book a table{" "}
            <span role="img" aria-label="plate">
              🍽️
            </span>
          </p>
          <div className="reservedPic"></div>
          <div className="booking-table">
            <p>Find your table for any occasion</p>
            <form id="myForm">
              <div className="bookingtablewrap">
                <div className="name1">
                  Enter your name :<br />
                  <input type="text" id="userName" />
                </div>
                <div className="phno">
                  Enter your phone number :<br />
                  <input type="number" id="phnumber" />
                </div>
                <div className="date">
                  Enter a date to book : <br />
                  <input type="date" id="bookdate" />
                </div>
                <div className="time">
                  Enter your desired time :<br />
                  <input type="time" id="booktime" />
                </div>
                <div className="people">
                  How many of you shall we expect?
                  <br />
                  <select id="noofpeople">
                    <option>1 person</option>
                    <option>2 people</option>
                    <option>3 people</option>
                    <option>4 people</option>
                    <option>5 people</option>
                    <option>More than 5</option>
                  </select>
                </div>
                <br />
              </div>
              <div className="letsgo" id="btn" onClick={e => this.submit(e)}>
                {" "}
                Let's Go!
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
