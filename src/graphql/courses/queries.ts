import { gql } from "@urql/core";

const ALL_COURSES = gql`
  query Course(
    $branchId: Float
    $offset: Int
    $before: String
    $after: String
    $first: Int
    $last: Int
    $branchNameIcontains: String
  ) {
    allCourses(
      branch_Id: $branchId
      offset: $offset
      before: $before
      after: $after
      first: $first
      last: $last
      branch_Name_Icontains: $branchNameIcontains
    ) {
      edges {
        node {
          branch {
            name
            pk
            progressive
          }
          parents {
            edges {
              node {
                pk
                name
              }
            }
          }
          createdAt
          image
          name
          pk
        }
      }
    }
  }
`;

const COURSE_QUERY = gql`
  query Course($pk: Int) {
    course(pk: $pk) {
      description
      name
      pk
    }
  }
`;

const COURSE_CHAPTERS = gql`
  query AllChapers(
    $courseId: Float
    $orderBy: String
    $lessonSetOrderBy: String
    $offset: Int
    $before: String
    $after: String
    $first: Int
    $last: Int
  ) {
    allChapters(
      course_Id: $courseId
      orderBy: $orderBy
      offset: $offset
      before: $before
      after: $after
      first: $first
      last: $last
    ) {
      edges {
        node {
          chapterNumber
          createdAt
          name
          pk
          lessonSet(orderBy: $lessonSetOrderBy) {
            edges {
              node {
                name
                pk
                lessonNumber
              }
            }
          }
        }
      }
    }
  }
`;

const LESSON_QUERY = gql`
  query Lesson($chapterId: Int, $lessonNumber: Int) {
    lesson(chapterId: $chapterId, lessonNumber: $lessonNumber) {
      createdAt
      lessonNumber
      name
      notes
      pk
      video
    }
  }
`;
export { ALL_COURSES, COURSE_QUERY, COURSE_CHAPTERS, LESSON_QUERY };
