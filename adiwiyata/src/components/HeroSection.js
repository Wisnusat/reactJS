import React from "react";
import "./HeroSection.css";
import "../App.css";

//tampilan awal
function HeroSection(props) {
  return (
    <div className="hero-container">
      <div className="bg">
        <img src={process.env.PUBLIC_URL + "/images/" + props.img} />
      </div>
      <h1>{props.judul}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default HeroSection;
