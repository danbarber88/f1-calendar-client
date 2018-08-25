import React, { Component } from "react";
import LastYear from "./info-squares/LastYear";
import FastestLap from "./info-squares/FastestLap";

class InfoSquare extends Component {
  render() {
    return (
      <div className="info-square-container">
        {this.props.resultsAvailable ? (
          <FastestLap result={this.props.result} />
        ) : (
          <LastYear lastWinner={this.props.lastWinner} />
        )}
      </div>
    );
  }
}

export default InfoSquare;
