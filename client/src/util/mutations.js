import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!, $username: String!) {
    createUser(email: $email, password: $password, username: $username) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_WATCH_ITEM = gql`
  mutation addWatchItem($watchlistData: ID!, $IMDbId: String!) {
    addWatchItem(watchlistData: $watchlistData, IMDbId: $IMDbId) {
      token
    }
  }
`;

export const REMOVE_WATCH_ITEM = gql`
  mutation removeWatchItem($itemId: ID!) {
    removeWatchItem(itemId: $itemId) {
      token
    }
  }
`;

export const UPDATE_WATCH_ITEM = gql`
  mutation updateWatchItem($itemId: ID!) {
    updateWatchItem(itemId: $itemId) {
      token
    }
  }
`;
