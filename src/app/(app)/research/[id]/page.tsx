import { ResearchSubmissionsType, ResearchTaskType } from "@/gql/graphql";
import { RESEARCH_DETAIL_QUERY } from "@/graphql/research/queries";
import { makeClient } from "@/lib/urlq";
import RenderMath from "@/components/RenderMath";
import SubmitPaper from "../SubmitPaper";
import Submissions from "../../../../components/Submissions";

const ResearchDetailPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  let {
    data,
    errors,
  }: {
    data: {
      researchTask: any;
    };
    errors: any[];
  } = await makeClient()
    .query(RESEARCH_DETAIL_QUERY, {
      pk: Number(id),
    })
    .then((res: any) => res);
  return (
    <div className="pt-16 pb-2 h-full w-full ">
      <div className="max-w-screen-2xl mx-auto w-full h-full">
        <div className="grid md:grid-cols-5 md:gap-4 w-full h-full p-2">
          <div className=" w-full h-full md:col-span-3 py-10 overflow-auto">
            <article
              className="prose w-full  min-w-[90%] p-2 text-textColor
        prose-a:text-accent prose-code:text-textColor prose-code:font-mono
        prose-headings:text-textColor prose-headings:font-bold overflow-ellipsis"
            >
              <h3>Research Description</h3>
              <RenderMath
                content={data?.researchTask?.description || "No Content"}
              />
            </article>
          </div>
          <div className=" w-full h-full flex flex-col md:col-span-2">
            <div className="flex w-full justify-end py-1">
              <SubmitPaper id={Number(id)} />
            </div>
            <div className="space-y-2 md:pt-5 flex flex-col h-full overflow-auto">
              <div className="space-y-2 md:pt-5 flex flex-col ">
                <h6 className="text-xl font-bold">Appoved Submissions</h6>
                <Submissions
                  approvedSubmissions={
                    data?.researchTask?.approvedSubmissions?.edges.map(
                      (edge: any) => edge.node
                    ) || []
                }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetailPage;
