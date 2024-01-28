import { ChallengeChapterType, ChallengeType } from "@/gql/graphql";
import Link from "next/link";

const SingleQuiz = ({ challange }: { challange: ChallengeType }) => {
  let problems = 0;
  for (let chapter of challange.challengechapterSet.edges) {
    problems += chapter?.node?.problemSet?.totalCount || 0;
  }
  return (
    <Link
      href={`/solve/${challange.pk}`}
      className="bg-accent text-white aspect-[6/4] rounded shadow shadow-accent/30 py-4 px-2"
    >
      <div className="w-[80%] aspect-[6/5]  mx-auto"></div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold capitalize">{challange.title}</h1>

        <span className="font-medium capitalize">{problems} problems</span>
        <div className="flex justify-between items-center">
          <span className="text-xs capitalize"></span>
          <span className="font-light text-xs capitalize">
            {/* total: 25 eigen TKNS */}
          </span> 
        </div>
      </div>
    </Link>
  );
};

export default SingleQuiz;
