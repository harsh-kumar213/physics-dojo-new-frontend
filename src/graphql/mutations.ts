import { gql } from "@urql/core";

const SIGN_FILE = gql`
  mutation SignS3($fileSize: Int!, $filename: String!, $filetype: String!) {
    signS3(fileSize: $fileSize, filename: $filename, filetype: $filetype) {
      url
    }
  }
`;

export { SIGN_FILE}