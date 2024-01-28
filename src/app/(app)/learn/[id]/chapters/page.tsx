import Link from "next/link";
import { Fragment } from "react";
import { COURSE_CHAPTERS } from "@/graphql/courses/queries";
import { makeClient } from "@/lib/urlq";
import { ChapterType, LessonType } from "@/gql/graphql";
import Lesson from "./Lesson";

const LearnChapterPage = async ({
  searchParams: { chapter: chapter_, lecture: lecture_ },
  params: { id: id_ },
}: {
  searchParams: {
    chapter: string;
    lecture: string;
  };
  params: {
    id: string;
  };
}) => {
  let id = id_ || "1";
  let chapter = chapter_;
  let lecture = lecture_ || "1";
  let {
    data,
    errors,
  }: {
    data: {
      allChapters: {
        edges: { node: ChapterType }[];
      };
    };

    errors: any[];
  } = await makeClient()
    .query(COURSE_CHAPTERS, {
      courseId: Number(id),
      orderBy: "chapterNumber",
      lessonSetOrderBy: "lessonNumber",
    })
    .then((res: any) => res);
  // if no chapter_ is specified chapter = first chapter

  if (!chapter) {
    chapter = `${data?.allChapters?.edges[0]?.node?.pk}` as string;
  }
  return (
    <div className="flex flex-col pt-20 w-full h-full ">
      <div className="max-w-screen-2xl mx-auto w-full h-full">
        <div className="grid lg:grid-cols-7 w-full gap-4 h-full">
          <div className="lg:col-span-2 py-10 bg-secondary rounded  h-full overflow-auto">
            <div className="flex flex-col space-y-1 py-2">
              {data?.allChapters?.edges.map(
                ({ node: thisChapter }: { node: ChapterType }) => (
                  <Fragment key={thisChapter?.pk}>
                    <Link
                      href={`/learn/${id}/chapters/?chapter=${thisChapter?.pk}`}
                      className={`px-2 py-1 font-bold text-xl
                    ${
                      chapter === `${thisChapter?.pk}`
                        ? "bg-accent/70 text-white"
                        : ""
                    }
                      `}
                    >
                      {thisChapter?.name}
                    </Link>
                    <div className="pl-5 space-y-2 flex flex-col">
                      {thisChapter.lessonSet?.edges.map((lesson) => (
                        <Link
                          key={lesson?.node?.pk}
                          href={`/learn/${id}/chapters/?chapter=${thisChapter.pk}&lecture=${lesson?.node?.lessonNumber}`}
                          className={`font-light text-md rounded px-2 py-0.5
                          ${
                            lecture === `${lesson?.node?.lessonNumber}` &&
                            chapter === `${thisChapter?.pk}`
                              ? "bg-accent/50 "
                              : ""
                          }
                            `}
                        >
                          {lesson?.node?.name}
                        </Link>
                      ))}
                    </div>
                  </Fragment>
                )
              )}
            </div>
          </div>
          {chapter && lecture ? (
            <Lesson chapterId={chapter} lessonNumber={lecture} />
          ) : (
            <div className="col-span-5 flex flex-col space-y-5">
              <h1 className="text-3xl font-bold">Select a chapter</h1>
              <p className="text-xl">
                Select a chapter from the left to get started.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearnChapterPage;
