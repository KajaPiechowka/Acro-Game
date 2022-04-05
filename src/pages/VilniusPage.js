import React from "react";
import ClassesPhoto from "../assets/images/vilnius-classes.jpg";
import KajaPhoto from "../assets/images/kaja.png";
import ViliusPhoto from "../assets/images/vilius.png";

const VilniusPage = () => (
  <div className="container main">
    <div className="classes">
      <img
        className="classes__main-image"
        src={ClassesPhoto}
        alt="classes"
      ></img>
      <div className="classes__text">
        <h1>Come to Regular Classes in Vilnius!</h1>
        <p>
          This is introduction to acro yoga. We'll be covering the basic
          positions of acro yoga. Trying to get in, out and through them as
          easily as possible. These classes will be sequential meaning that
          we'll be using skills we learn in one class for the next time.
        </p>
        <div className="classes__links">
          <a href="https://www.facebook.com/events/649443812814476/649443839481140">
            Facebook Event
          </a>
          <a href="https://www.facebook.com/groups/1370878500009058">
            Facebook Group
          </a>
        </div>
        <div className="classes__teachers">
          <div className="classes__teacher">
            <img src={KajaPhoto} alt="classes"></img>
            <span>Kaja Piechówka</span>
            <span>+48698699547</span>
            <span>kaja.piechowka@gmail.com</span>
          </div>
          <div className="classes__teacher">
            <img src={ViliusPhoto} alt="classes"></img>
            <span>Vilius Grižas</span>
            <span>+37067625987</span>
            <span>viliusgrizas@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VilniusPage;
