import React, { Component } from "react";
import moment from "moment";

class Sessions extends Component {
  render() {
    return (
      <div className="start-times">
        <div>
          <p className="session">First Practice</p>
          <p>{moment(this.props.times.firstPractice).format("ddd")}</p>
          <p className="times">
            {moment(this.props.times.firstPractice).format("DD MMM @ hh:mm a")}
          </p>
        </div>
        <div>
          <p className="session">Second Practice</p>
          <p>{moment(this.props.times.secondPractice).format("ddd")}</p>
          <p className="times">
            {moment(this.props.times.secondPractice).format("DD MMM @ hh:mm a")}
          </p>
        </div>
        <div>
          <p className="session">Third Practice</p>
          <p>{moment(this.props.times.thirdPractice).format("ddd")}</p>
          <p className="times">
            {moment(this.props.times.thirdPractice).format("DD MMM @ hh:mm a")}
          </p>
        </div>
        <div>
          <p className="session">Qualifying</p>
          <p>{moment(this.props.times.qualifying).format("ddd")}</p>
          <p className="times">
            {moment(this.props.times.qualifying).format("DD MMM @ hh:mm a")}
          </p>
        </div>
        <div>
          <p className="session">Race</p>
          <p>{moment(this.props.times.race).format("ddd")}</p>
          <p className="times">
            {moment(this.props.times.race).format("DD MMM @ hh:mm a")}
          </p>
        </div>
      </div>
    );
  }
}

export default Sessions;
