import { gql } from "@urql/core";

const ME = gql`
  query Me {
    me {
      username
      firstName
      lastName
      id
      pk
      image
      isStaff
      email
      phone
      gender
      isActive
      eigenTokens
    }
  }
`;

export { ME };
