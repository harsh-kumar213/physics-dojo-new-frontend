import { CourseType } from "@/gql/graphql";
import Link from "next/link";

const SingleCourse = ({ course }: { course: CourseType }) => {
  return (
    <Link
      href="/learn/1"
      className="bg-accent text-white aspect-[6/4] rounded shadow shadow-accent/30 py-4 px-2"
    >
      <div className="w-[80%] aspect-[6/5]  mx-auto"></div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold capitalize">
          {course?.name || "Course Name"}
        </h1>
        <span className="text-xs">{course?.branch?.name || "Branch Name"}</span>
        <span className="font-medium">5 chapters</span>
      </div>
    </Link>
  );
};

export default SingleCourse;
