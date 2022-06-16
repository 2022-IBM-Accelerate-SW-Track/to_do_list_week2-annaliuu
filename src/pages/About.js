import React, { Component } from "react";
import "./About.css";
import profile from "../assets/headshot.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img
              className = "profile_image"
              // Image goes here
              src = {profile} alt="pfp"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Anna Liu</div>
            <div className="brief_description">
              Hello, I'm Anna and I'm a third year data science student at UC
              San Diego! Some of my hobbies include exploring food places with
              friends, going on spontaneous trips and adventures, and
              skiing/snowboarding during the winter :)
            </div>
          </div>
        </div>
      </div>
    );
  }
}
