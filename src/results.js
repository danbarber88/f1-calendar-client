export function fetchResults(round) {
  return fetch(`https://ergast.com/api/f1/current/${round}/results.json`)
    .then(res => res.json())
    .then(json => json.MRData.RaceTable.Races)
    .then(races => {
      if (races.length > 0) {
        let round = races[0].round;
        let firstPlace = races[0].Results[0].Driver.code;
        let secondPlace = races[0].Results[1].Driver.code;
        let thirdPlace = races[0].Results[2].Driver.code;
        let fastestLap = races[0].Results.find(
          result => result.FastestLap.rank === "1"
        );

        return {
          round: round,
          first: firstPlace,
          second: secondPlace,
          third: thirdPlace,
          fastestLap: {
            time: fastestLap.FastestLap.Time.time,
            driver: fastestLap.Driver.familyName,
            driverNum: fastestLap.Driver.permanentNumber
          }
        };
      } else {
        return {
          notAvailable: true
        };
      }
    });
}
