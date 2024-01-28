import { ChallengeType } from "@/gql/graphql";
import { CHALLENGE } from "@/graphql/solve/queries";
import { makeClient } from "@/lib/urlq";
import dynamic from "next/dynamic";
import Link from "next/link";
import SolveProblem from "./SolveProblem";
import ProblemsMenu from "./ProblemsMenu";

const Editor = dynamic(() => import("./Editor"), {
  ssr: false,
});

const SolvePage = async ({
  params: { id },
  searchParams: { chapter: chapter_, problem: problem_ },
}: {
  params: {
    id: string;
  };
  searchParams: {
    chapter: string;
    problem: string;
  };
}) => {
  let problemNumber = Number(problem_ || 1);
  let {
    data,
    errors,
  }: {
    data: {
      challenge: ChallengeType;
      title: string;
      pk: Number;
    };
    errors: any[];
  } = await makeClient()
    .query(CHALLENGE, {
      pk: Number(id),
    })
    .then((res: any) => res);
  // get chapter pk from first challengechapterSet
  let chapter = Number(
    chapter_ || data?.challenge?.challengechapterSet?.edges[0]?.node?.pk
  );
  return (
    <div className="flex flex-col pt-14 w-full max-h-screen h-screen ">
      <div className=" grid xl:grid-cols-8   max-w-full mx-auto w-full h-full ">
        <ProblemsMenu
          challengechapterSet={data.challenge.challengechapterSet.edges.map(chapter => chapter?.node)}
          id={id}
          problemNumber={problemNumber}
        />
        <SolveProblem chapter={chapter} problemNumber={problemNumber} />
      </div>
    </div>
  );
};

export default SolvePage;
