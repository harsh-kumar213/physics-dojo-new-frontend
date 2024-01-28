import { gql } from "@urql/core";

const CHALLENGES = gql`
  query Challenges(
    $orderBy: String
    $offset: Int
    $before: String
    $after: String
    $first: Int
    $last: Int
  ) {
    challenges(
      orderBy: $orderBy
      offset: $offset
      before: $before
      after: $after
      first: $first
      last: $last
    ) {
      totalCount
      edgeCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        node {
          minDescription
          pk
          preTitle
          title
          image
          challengechapterSet {
            edges {
              node {
                problemSet {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  }
`;

const CHALLENGE = gql`
  query Challenge($pk: Int) {
    challenge(pk: $pk) {
      title
      challengechapterSet {
        edges {
          node {
            pk
            chapterNumber
            title
            problemSet {
              edges {
                node {
                  problemNumber
                  pk
                  title
                }
              }
            }
          }
        }
      }
      pk
    }
  }
`;

const PROBLEM = gql`
  query Problem($problemNumber: Int!, $chapterId: Int!) {
    problem(problemNumber: $problemNumber, chapterId: $chapterId) {
      myAnswer {
        answer
        awardedPoints
        id
        pk
        solveDate
        solved
        startDate
      }
      pk
      problemType
      problemNumber
      skeleton
      title
      description
      video
    }
  }
`;

export { CHALLENGES, CHALLENGE, PROBLEM };
