import { gql } from "@urql/core";

const CREATE_RESEARCH_SUBMISSION = gql`
  mutation CreateResearchSubmission(
    $filePath: String!
    $researchTask: Int!
    $title: String!
  ) {
    createResearchSubmission(
      filePath: $filePath
      researchTask: $researchTask
      title: $title
    ) {
      researchSubmission {
        approved
        filePath
      }
    }
  }
`;

export { CREATE_RESEARCH_SUBMISSION };
