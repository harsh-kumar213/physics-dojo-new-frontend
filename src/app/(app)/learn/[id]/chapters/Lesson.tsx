import RenderMath from "@/components/RenderMath";
import { LessonType } from "@/gql/graphql";
import { LESSON_QUERY } from "@/graphql/courses/queries";
import { makeClient } from "@/lib/urlq";

const Lesson = async ({
  chapterId,
  lessonNumber,
}: {
  chapterId: string;
  lessonNumber: string;
}) => {
  let {
    data,
    errors,
  }: {
    data: {
      lesson: LessonType;
    };

    errors: any[];
  } = await makeClient()
    .query(LESSON_QUERY, {
      chapterId: Number(chapterId),
      lessonNumber: Number(lessonNumber),
    })
    .then((res: any) => res);
  return (
    <div className="lg:col-span-5 flex flex-col space-y-5 overflow-auto py-5 px-3">
      <iframe
        className="aspect-video"
        src={data?.lesson?.video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <h3 className="text-lg font-bold uppercase">{data?.lesson?.name}</h3>
      <h2 className="text-xl font-bold">Lesson Notes</h2>
      <article className="prose w-full  min-w-[90%] p-2 text-textColor
        prose-a:text-accent prose-code:text-textColor prose-code:font-mono
        prose-headings:text-textColor prose-headings:font-bold">
        <RenderMath content={data?.lesson?.notes} />
      </article>
    </div>
  );
};

export default Lesson;
