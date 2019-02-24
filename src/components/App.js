import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import RaceContainer from "./RaceContainer";
import logo from "../img/f1_logo_white.svg";
import moment from "moment-timezone";

// const client = new ApolloClient({
//   uri: "http://192.168.1.188:4000/graphql"
// });

const client = new ApolloClient({
  uri: "https://f1-calendar-server.herokuapp.com/graphql"
});

class App extends Component {
  userTimezone() {
    const timezone = moment.tz.zone(moment.tz.guess()).abbr(moment());
    let regex = new RegExp(/([a-z])/gi);
    return regex.test(timezone)
      ? `Timezone: ${timezone}`
      : `Timezone: GMT${timezone}`;
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="logo-container">
            <p className="timezone">{this.userTimezone()}</p>
            <img id="logo" src={logo} alt="Formula 1 logo" />
            <div className="calendar-text">
              <h1>2019 CALENDAR</h1>
            </div>
          </div>
          <RaceContainer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
