import { gql } from "@apollo/client";

export const ME = gql`
  query Me {
    me {
      username
      _id
      email
      watchList {
        _id
        title
        summary
      }
    }
  }
`;
