const { gql } = require("apollo-server-express");

const typeDefs = gql`
  "Unix time stamp in milliseconds."
  scalar Date

  type Query {
    "Find the logged in user."
    me: User
  }

  type Mutation {
    createUser(email: String!, password: String!, username: String!): Auth
    login(email: String!, password: String!): Auth
    addWatchItem(watchlistData: ID!, IMDbId: String!): User
    removeWatchItem(itemId: ID!): User
    updateWatchItem(itemId: ID!): User
  }

  type Auth {
    token: String!
    user: User!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    lastLogin: Date!
    watchList: [WatchItem]
  }

  type WatchItem {
    _id: ID!
    title: String!
    summary: String
    Poster: String
    IMDbId: String
    mediaType: Boolean
  }
`;

module.exports = typeDefs;
