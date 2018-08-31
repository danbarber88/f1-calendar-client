import React, { Component } from "react";
import Sessions from "./Sessions";
import Podium from "./Podium";
import InfoSquare from "./InfoSquare";
import moment from "moment";
import arrow from "../img/arrow.svg";
import { graphql } from "react-apollo";
import { updateLastFetchMutation } from "../queries/queries";
import "../drivers.css";

import * as tracks from "../importTracks.js";

class Race extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: this.props.isNextRace
    };

    this.expandToggle = this.expandToggle.bind(this);
  }

  componentDidMount() {
    this.RaceResult();
  }

  RaceResult() {
    // no result and the race time has passed
    if (!this.props.result && moment() > moment(this.props.race.times.race)) {
      // if an hour has elapsed since last fetch then we are free to do it again
      if (
        moment(this.props.lastFetch.lastFetch) < moment().subtract(1, "hours")
      ) {
        this.props.updateLastFetchMutation({
          variables: {
            id: "5b76d0954af1c531a849039e",
            lastFetch: moment().format()
          }
        });
        this.props.postRaceResult(this.props.race.round);
      }
    }
  }

  expandToggle() {
    return this.state.expanded
      ? this.setState({
          expanded: false
        })
      : this.setState({
          expanded: true
        });
  }

  render() {
    const { country, locality } = this.props.race.circuit.location;
    const date = this.props.race.times.race;
    const trackImg = this.props.race.circuit.location.country;

    if (this.state.expanded) {
      return (
        <div
          className={`Race expanded ${this.props.result.first}`}
          onClick={this.expandToggle}
        >
          <div className="main-info">
            <img className="arrow open" src={arrow} />
            <p className="location">{`${country}, ${locality}`}</p>
            <p className="text-right">
              {this.props.result
                ? this.props.result.first
                : moment(date)
                    .tz(this.props.timezone)
                    .format("DD MMM")}
            </p>
          </div>
          <div className="track-info-container">
            <div className="track">
              <img src={tracks.default[trackImg.toLowerCase()]} alt="" />
            </div>
            <InfoSquare
              resultsAvailable={this.props.result ? true : false}
              lastWinner={this.props.race.lastWinner}
              result={this.props.result}
            />
          </div>
          {this.props.result ? (
            <Podium result={this.props.result} />
          ) : (
            <Sessions
              timezone={this.props.timezone}
              times={this.props.race.times}
            />
          )}
        </div>
      );
    } else {
      return (
        <div
          className={`Race ${this.props.result.first}`}
          onClick={this.expandToggle}
        >
          <div className="main-info">
            <img className="arrow" src={arrow} />
            <p className="location">{`${country}, ${locality}`}</p>
            <p className="text-right">
              {this.props.result
                ? this.props.result.first
                : moment(date).format("DD MMM")}
            </p>
          </div>
        </div>
      );
    }
  }
}

export default graphql(updateLastFetchMutation, {
  name: "updateLastFetchMutation"
})(Race);
