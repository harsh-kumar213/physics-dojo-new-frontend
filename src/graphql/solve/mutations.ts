import { gql } from "@urql/core";

const TEST_ASNSWER = gql`
  mutation TestAnswer($data: AnswerInput!) {
    testAnswer(data: $data) {
      eigenTokens
      mySolution {
        answer
        pk
      }
      error
      message
    }
  }
`;

const SOLVED_THEORY = gql`
  mutation solvedTheory($problemId: Int!) {
    solvedTheory(problemId: $problemId) {
      eigenTokens
    }
  }
`;

export { TEST_ASNSWER, SOLVED_THEORY };
