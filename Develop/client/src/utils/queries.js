import { gql } from "@apollo/client";

export const GET_ME = gql`
  query GetMe {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        title
        description
        image
      }
    }
  }
`;
