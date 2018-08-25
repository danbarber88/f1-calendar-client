import React, { Component } from "react";

class FastestLap extends Component {
  render() {
    return (
      <div className="fastest-lap">
        <div className="text-container">
          <h3>FASTEST LAP</h3>
          <p>
            <span>{`#${this.props.result.fastestLapDriverNum}`}</span>{" "}
            {this.props.result.fastestLapDriver}
          </p>
          <p>{this.props.result.fastestLapTime}</p>
        </div>
      </div>
    );
  }
}

export default FastestLap;
