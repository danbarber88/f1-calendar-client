import React, { Component } from "react";

class LastYear extends Component {
  render() {
    const lastWinner = this.props.lastWinner;
    return (
      <div className="last-winner">
        <div className="text-container">
          <h3>LAST YEAR</h3>
          <p>{lastWinner ? lastWinner : "N/A"}</p>
        </div>
      </div>
    );
  }
}

export default LastYear;
