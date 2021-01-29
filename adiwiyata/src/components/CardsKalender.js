import React from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import "./CardsKalender.css";
import CardItemKalender from "./CardsItemKalender";

function CardsKelender(props) {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItemKalender
              src="images/gerakan-sejuta-pohon.jpg"
              text="Hari Perencanaan Gerakan Sejuta Pohon"
              label="10JANUARI"
            />
            <CardItemKalender
              src="images/lahan-basah.jpeg"
              text="Hari Lahan Basah SeDunia"
              label="2FEBRUARI"
            />
          </ul>
          <ul className="cards__items">
            <CardItemKalender
              src="images/peduli-sampah.jpg"
              text="Hari Peduli Sampah Nasional"
              label="21FEBRUARI"
            />
            <CardItemKalender
              src="images/hari-konservasi.jpg"
              text="Hari Strategi Konservasi SeDunia"
              label="6MARET"
            />
            <CardItemKalender
              src="images/bhakti-rimbawan.jpg"
              text="Hari Bhakti Rimbawan"
              label="16MARET"
            />
          </ul>
          <ul className="cards__items">
            <CardItemKalender
              src="images/poster-2.jpg"
              text="Hari Kehutanan Sedunia"
              label="20MARET"
            />
            <CardItemKalender
              src="images/hari-hutan.jpg"
              text="Hari Hutan Internasional"
              label="21MARET"
            />
            <CardItemKalender
              src="images/hari-air.png"
              text="Hari Air SeDunia"
              label="22MARET"
            />
          </ul>
          <ul className="cards__items">
            <CardItemKalender
              src="images/hari-meteorologi.png"
              text="Hari Meteorologi"
              label="23MARET"
            />
            <CardItemKalender
              src="images/hari-bumi.jpg"
              text="Hari Bumi"
              label="22APRIL"
            />
            <CardItemKalender
              src="images/hayati.jpg"
              text="Hari Keanekaragaman Hayati"
              label="21MEI"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsKelender;
