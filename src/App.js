import React, { Component } from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Main from "./Components/main";
import Contact from "./Components/contact";
import OurStory from "./Components/ourstory";
import Menu from "./Components/menu";
import Gallery from "./Components/gallery";
import Booking from "./Components/booking";
import Events from "./Components/events";
import Maps from "./Components/maps";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

class App extends Component {

  render = () => {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/contact" component={Contact} />
            <Route path="/ourStory" component={OurStory} />
            <Route path="/menu" component={Menu} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/booking" component={Booking} />
            <Route path="/events" component={Events} />
            <Route path="/maps" component={Maps} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  };
}

export default App;
