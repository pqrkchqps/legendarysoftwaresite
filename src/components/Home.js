import React from "react";
import image from "../images/legendary_tree.jpg";

function Home() {
  return (
    <div className="home">
      <section className="hero" style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-text">
          <h1>Legendary Software</h1>
          <div className="quote">
            <p>Rooted in Excellence,</p>
            <p className="indent-text">Growing with Faith.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
