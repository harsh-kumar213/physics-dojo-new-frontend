import { gql } from "@urql/core";

const LANDING_PAGE_QUERY = gql`
  query AllCourses(
    $coursesfirst: Int
    $challengesFirst: Int
    $researchFirst: Int
  ) {
    allCourses(first: $coursesfirst) {
      edges {
        node {
          image
          name
          pk
          createdAt
          branch{
            name
            pk
          }
        }
      }
    }
    challenges(first: $challengesFirst) {
      edges {
        node {
          pk
          title
          challengechapterSet {
            edges {
              node {
                problemSet {
                  totalCount
                }
              }
            }
          }
          image
          createdDate
        }
      }
    }
    allResearchTasks(first: $researchFirst) {
      edges {
        node {
          image
          pk
          title
        }
      }
    }
  }
`;

export { LANDING_PAGE_QUERY };
