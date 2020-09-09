import React, { Component } from "react";

const mapstyle = {
  width: "100%",
  height: "98vh",
  paddingTop: "60px"
};


export default class maps extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
<iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.6682868072767!2d85.33822472737619!3d27.718754709745983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196de5da5741%3A0x652792640c70ede9!2sHerald%20College%20Kathmandu!5e0!3m2!1sen!2snp!4v1581562830462!5m2!1sen!2snp"          style={mapstyle}
        ></iframe>
      </div>
    );
  }
}
