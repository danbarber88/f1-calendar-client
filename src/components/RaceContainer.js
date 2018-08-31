import React, { Component } from "react";
import Race from "./Race";
import moment from "moment-timezone";
import { graphql, compose } from "react-apollo";
import arrow from "../img/arrow.svg";
import schedule from "../schedule";
import {
  addResultMutation,
  lastFetchQuery,
  getResultsQuery
} from "../queries/queries";
import { fetchResults } from "../results";

class RaceContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schedule: schedule,
      timezone: moment.tz.guess()
    };

    this.postRaceResult = this.postRaceResult.bind(this);
  }

  postRaceResult(round) {
    fetchResults(round).then(data => {
      if (!data.notAvailable) {
        this.props.addResultMutation({
          variables: {
            round: data.round,
            first: data.first,
            second: data.second,
            third: data.third,
            fastestLapTime: data.fastestLap.time,
            fastestLapDriver: data.fastestLap.driver,
            fastestLapDriverNum: data.fastestLap.driverNum
          },
          refetchQueries: [{ query: getResultsQuery }]
        });
      }
    });
  }

  nextRace() {
    let nextRace = this.state.schedule.raceData.raceTable.races.find(race => {
      let raceDate = moment(race.date);
      let now = moment();
      return raceDate >= now;
    });
    return nextRace.round;
  }

  displayRaces() {
    const races = this.state.schedule.raceData.raceTable.races;
    return races.map((race, i) => {
      if (this.props.lastFetchQuery.loading || this.props.data.loading) {
        return (
          <div className="Race">
            <div className="main-info">
              <img className="arrow" src={arrow} />
              <p className="location">Loading...</p>
            </div>
          </div>
        );
      } else {
        return (
          <Race
            timezone={this.state.timezone}
            race={race}
            isNextRace={this.nextRace() === race.round ? true : false}
            postRaceResult={this.postRaceResult}
            lastFetch={this.props.lastFetchQuery.lastFetch}
            result={
              this.props.data.results[race.round - 1]
                ? {
                    round: this.props.data.results[race.round - 1].round,
                    fastestLapTime: this.props.data.results[race.round - 1]
                      .fastestLapTime,
                    fastestLapDriver: this.props.data.results[race.round - 1]
                      .fastestLapDriver,
                    fastestLapDriverNum: this.props.data.results[race.round - 1]
                      .fastestLapDriverNum,
                    first: this.props.data.results[race.round - 1].first,
                    second: this.props.data.results[race.round - 1].second,
                    third: this.props.data.results[race.round - 1].third
                  }
                : false
            }
            key={i}
          />
        );
      }
    });
  }

  render() {
    return (
      <div className="RaceContainer">
        {this.displayRaces()}
        <div className="attribution">Created with use of the Ergast F1 API</div>
      </div>
    );
  }
}

export default compose(
  graphql(lastFetchQuery, { name: "lastFetchQuery" }),
  graphql(getResultsQuery),
  graphql(addResultMutation, { name: "addResultMutation" })
)(RaceContainer);
