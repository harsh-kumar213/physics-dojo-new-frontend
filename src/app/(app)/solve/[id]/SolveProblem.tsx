import { PROBLEM } from "@/graphql/solve/queries";
import Editor from "./Editor";
import { ProblemType } from "@/gql/graphql";
import { makeClient } from "@/lib/urlq";
import RenderMath from "@/components/RenderMath";
import { cookies } from "next/headers";
import TheorySolve from "@/components/TheorySolve";

const SolveProblem = async ({
  chapter,
  problemNumber,
}: {
  chapter: number;
  problemNumber: number;
}) => {
  const clientCookies = cookies();
  let token = clientCookies.get("token")?.value || "";
  let {
    data,
  }: {
    data: {
      problem: ProblemType;
      erros: any;
    };
    errors: any[];
  } = await makeClient({
    Authorization: `JWT ${token}`,
  })
    .query(PROBLEM, {
      problemNumber: problemNumber,
      chapterId: chapter,
    })
    .then((res: any) => {
      return res;
    });
  return (
    <div className="md:grid md:grid-cols-9 w-full xl:col-span-7 h-full overflow-auto">
      <div className="md:col-span-4 w-full py-5 flex flex-col overflow-auto h-full">
        <article
          className="prose w-full  md:min-w-[100%] p-2 text-textColor
        prose-a:text-accent prose-code:text-textColor prose-code:font-mono
        prose-headings:text-textColor prose-headings:font-bold
        overflow-auto"
        >
          <h2>{data?.problem?.title}</h2>
          <RenderMath content={data?.problem?.description} />
        </article>
      </div>
      <div className="col-span-5 pt-3 overflow-auto h-full w-full">
        {data?.problem?.problemType === "CODE" ? (
          <Editor
            problemId={data?.problem?.pk as number}
            codeConent={
              data?.problem?.myAnswer?.answer ||
              (data.problem.skeleton as string)
            }
          />
        ) : (
            <TheorySolve
              problemId={data?.problem?.pk as number}
              problem={data?.problem}
            />
        )}
      </div>
    </div>
  );
};

export default SolveProblem;
