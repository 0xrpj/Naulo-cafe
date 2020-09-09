import React, { Component } from "react";

export default class OurStory extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <main className="main">
          <p className="text-title" id="title">
            Our story{" "}
            <span role="img" aria-label="story">
              📕
            </span>
          </p>
          <div className="part-twos">
            <img alt="" src="../images/founders.JPG" id="photocafe" />
            <section id="description">
              Welcome to Naulo, the only thematic restaurant in town, where you
              can enjoy delectable cuisine and drinks in a very unique ambience.
              The Naulo experience is quite distinct than any other, the view of
              nature, paintings and warm soft lighting encourages settling in
              and getting comfortable, whereas the amazing combination of
              flavors, quality ingredients and richness in food satisfies the
              cravings. Naulo is driven with passion, the immense interest
              towards food. Our chef with his hard-earned experiences brings
              soul to the recipes and the restro design gives out a completely
              different vibe. Our style is relaxed, open and friendly, so come
              by the restaurant for coffee, drinks and mouth watering taste. We
              also provode free wifi and good taste and hygiene is our utmost
              priority.
              <br />
              <mark>
                Naulo Cafe was opened on Nov 2, 2019 by Roshan Parajuli.
              </mark>
            </section>
          </div>
        </main>
      </>
    );
  }
}
