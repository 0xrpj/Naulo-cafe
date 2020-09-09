import React, { Component } from "react";
export default class Events extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>

        <div className="main">
          <div className="text-title" id="title">
            Our events{" "}
            <span role="img" aria-label="calender">
              📅
            </span>
          </div>
          <p className="events-title">Upcoming events!</p>
          <div className="ewrapper">
            <div>
              <h1 className="titles">Cafe inauguration </h1>
              <br />
              <img src="../images/hotel.jpg" alt="" style={{ width: "100%" }} />
              <p className="text-inside-p">
                Our cafe is going to open in 14<sup>th </sup> february. On the
                opening day, every dish is provided for free for an hour. And
                after that, special discounts will be given for the benefits of
                customers. All the people, who are reading this, are invited.
              </p>
            </div>

            <div>
              <h1 className="titles">Netflix and chill night </h1>
              <br />
              <img src="../images/nac.jpg" alt="" style={{ width: "100%" }} />
              <p className="text-inside-p">
                We are organizing an event to gather people around and netflix
                and chill all night long. We accept couples and friends. The
                participants will be provided free popcorn and a cup of coffee
                and heavy discounts on other snacks!
              </p>
            </div>

            <div>
              <h1 className="titles">Catering </h1>
              <br />
              <img src="../images/cat.jpg" alt="" style={{ width: "100%" }} />
              <p className="text-inside-p">
                Let us bring the Naulo Cafe experience to you. The Naulo Cafe
                team can create a memorable event for you and your guests,
                whether it is in the intimacy of your home or in the middle of a
                field surrounded by nature.
              </p>
            </div>

            <div>
              <h1 className="titles">Special face</h1>
              <br />
              <img
                src="../images/nitesh.jpg"
                alt=""
                style={{ width: "100%" }}
              />
              <p className="text-inside-p">
                A night of music and activism. Come to perform or just hang out
                with friends. New guests are invited every friday. Come to see
                Neetesh jung Kunwar perform live in 21<sup>st </sup> feb.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
