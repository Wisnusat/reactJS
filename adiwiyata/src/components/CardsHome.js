import React from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import "./Cards.css";

function CardsHome(props) {
  return (
    <div className="cards">
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/3.jpg"
              text="Kegiatan bersih-bersih di lingkungan sekolah"
            />
            <CardItem
              src="images/1.jpg"
              text="Budidaya tanaman di lingkungan sekolah"
            />
            <CardItem
              src="images/2.jpg"
              text="Greenhouse, tempat untuk budidaya tanaman"
            />
          </ul>
        </div>
        <Link classname="gallery-link" to="/gallery" style={{ textDecoration: "none", color: "#252e48"}}>
          <h4 className="see-more"> See More Photos </h4>
        </Link>
      </div>
    </div>
  );
}

export default CardsHome;
