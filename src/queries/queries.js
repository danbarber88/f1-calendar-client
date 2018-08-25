import { gql } from "apollo-boost";

const getResultsQuery = gql`
  {
    results {
      round
      fastestLapTime
      fastestLapDriver
      fastestLapDriverNum
      first
      second
      third
    }
  }
`;

const lastFetchQuery = gql`
  {
    lastFetch {
      lastFetch
    }
  }
`;

const addResultMutation = gql`
  mutation(
    $round: Int!
    $fastestLapTime: String!
    $fastestLapDriver: String!
    $fastestLapDriverNum: String!
    $first: String!
    $second: String!
    $third: String!
  ) {
    addResult(
      round: $round
      fastestLapTime: $fastestLapTime
      fastestLapDriver: $fastestLapDriver
      fastestLapDriverNum: $fastestLapDriverNum
      first: $first
      second: $second
      third: $third
    ) {
      round
      fastestLapTime
      fastestLapDriver
      fastestLapDriverNum
      first
      second
      third
    }
  }
`;

const updateLastFetchMutation = gql`
  mutation($id: ID, $lastFetch: String) {
    updateLastFetch(id: $id, lastFetch: $lastFetch) {
      lastFetch
    }
  }
`;

export {
  getResultsQuery,
  lastFetchQuery,
  addResultMutation,
  updateLastFetchMutation
};
