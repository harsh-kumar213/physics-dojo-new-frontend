import { gql } from "@urql/core";

const RESEARCH_QUERY = gql`
  query AllResearchTasks(
    $offset: Int
    $before: String
    $after: String
    $first: Int
    $last: Int
  ) {
    allResearchTasks(
      offset: $offset
      before: $before
      after: $after
      first: $first
      last: $last
    ) {
      edges {
        node {
          id
          pk
          miniDescription
          title
          createdAt
          image
          allSubmissions {
            totalCount
          }
          approvedSubmissions {
            totalCount
          }
        }
      }
      totalCount
      edgeCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

const RESEARCH_DETAIL_QUERY = gql`
  query ResearchTask($pk: Int) {
    researchTask(pk: $pk) {
      allSubmissions {
        totalCount
      }
      approvedSubmissions {
        edges {
          node {
            approved
            createdAt
            filePath
            title
            id
            pk
            user {
              firstName
              lastName
              pk
            }
          }
        }
      }
      createdAt
      description
      image
      pk
      title
      updatedAt
    }
  }
`;

export { RESEARCH_QUERY, RESEARCH_DETAIL_QUERY };
