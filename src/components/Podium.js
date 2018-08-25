import React, { Component } from "react";
import podium from "../img/podium.svg";

class Podium extends Component {
  render() {
    return (
      <div className="podium">
        <div className="drivers">
          <div className="third">
            <p className="podium-name">{this.props.result.third}</p>
            <p className="podium-place">3rd</p>
          </div>
          <div className="first">
            <p className="podium-name">{this.props.result.first}</p>
            <p className="podium-place">1st</p>
          </div>
          <div className="second">
            <p className="podium-name">{this.props.result.second}</p>
            <p className="podium-place">2nd</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Podium;
