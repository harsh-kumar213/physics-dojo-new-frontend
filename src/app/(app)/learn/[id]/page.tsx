import RenderMath from "@/components/RenderMath";
import { CourseType } from "@/gql/graphql";
import { COURSE_QUERY } from "@/graphql/courses/queries";
import { makeClient } from "@/lib/urlq";
import Link from "next/link";

const LearnDetailPage = async ({
  params: { id },
}: {
  params: { id: number };
}) => {
  let {
    data,
    errors,
  }: {
    data: {
      course: CourseType;
    };

    errors: any[];
  } = await makeClient()
    .query(COURSE_QUERY, {
      pk: Number(id),
    })
    .then((res: any) => res);

  return (
    <div className="flex flex-col pt-20 w-full p-2 h-full ">
      <div className="max-w-screen-2xl mx-auto w-full space-y-10">
        <h2 className="text-2xl font-bold">
          {data?.course?.name}
        </h2>
        <article className="prose w-full  min-w-[90%] p-2 text-textColor
        prose-a:text-accent prose-code:text-textColor prose-code:font-mono
        prose-headings:text-textColor prose-headings:font-bold">
          <RenderMath
            content={data?.course?.description}/>
        </article>
        <div className="flex py-10">
          <Link
            href={`/learn/${id}/chapters`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Start Learning
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnDetailPage;
