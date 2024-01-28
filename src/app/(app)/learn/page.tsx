import SingleCourse from "@/components/SingleCourse";
import { CourseType } from "@/gql/graphql";
import { ALL_COURSES } from "@/graphql/courses/queries";
import { makeClient } from "@/lib/urlq";
import Link from "next/link";
import Charting from "@/components/Charting";

const LearnPage = async ({
  searchParams: { topic:topic_ },
}: {
  searchParams: {
    topic: string;
  };
  }) => {
  let topic = topic_ || "core";
  let {
    data,
    errors,
  }: {
    data: {
      allCourses: {
        edges: { node: CourseType }[];
      };
    };
    errors: any[];
  } = await makeClient()
    .query(ALL_COURSES, {
      offset: null,
      before: null,
      after: null,
      first: 10,
      last: null,
      branchNameIcontains: topic || "core",
    })
    .then((res: any) => res);
  let isTree = false;
  if (data) {
    // get node.branch of first course and see if progressive is true
    isTree = data?.allCourses?.edges[0]?.node?.branch?.progressive || false;
  }
  return (
    <div className="flex flex-col pt-20 w-full h-full">
      <div className="flex flex-col max-w-screen-2xl mx-auto w-full">
        <div className="flex">
          <div className="flex divide-x items-start justify-start border">
            <Link
              href="/learn?topic=core"
              className={`py-2 px-5
            ${topic === "core" ? "text-accent underline" : ""}
            `}
            >
              CORE
            </Link>
            <Link
              href="/learn?topic=applied"
              className={`py-2 px-5
            ${topic === "applied" ? "text-accent underline" : ""}
            `}
            >
              APPLIED
            </Link>
            <Link
              href="/learn?topic=misc"
              className={`py-2 px-5
            ${topic === "misc" ? "text-accent underline" : ""}
            `}
            >
              MISC
            </Link>
          </div>
        </div>
        {isTree ? (
          <div className="flex h-full flex-col w-full gap-4 py-10 justify-center lg:items-center overflow-x-auto">
            <Charting
            courses={data.allCourses.edges as any}
            />
            {/* <CourseOrgChart courses={data.allCourses.edges as any}/> */}
            {/* <DrawTree courses={data.allCourses.edges as any} /> */}
          </div>
        ) : (
          <div className="grid grid-cols-4 w-full gap-4 py-10">
            {data.allCourses.edges.map(
              ({ node: course }: { node: CourseType }) => (
                <SingleCourse key={course.pk}
                  course={course}
                />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnPage;
