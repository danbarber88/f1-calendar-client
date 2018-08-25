import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import RaceContainer from "./RaceContainer";
import logo from "../img/f1_logo_white.svg";

// const client = new ApolloClient({
//   uri: "http://192.168.1.188:4000/graphql"
// });

const client = new ApolloClient({
  uri: "https://f1-calendar-server.herokuapp.com/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="fightforfive tr">#FightForFive</div>
        <div className="fightforfive bl">#FightForFive</div>
        <div className="App">
          <div className="logo-container">
            <img id="logo" src={logo} alt="Formula 1 logo" />
            <div className="calendar-text">
              <h1>2018 CALENDAR</h1>
            </div>
          </div>
          <RaceContainer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
