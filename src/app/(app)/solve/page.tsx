import SingleQuiz from "@/components/SingleQuiz";
import { ChallengeType } from "@/gql/graphql";
import { CHALLENGES } from "@/graphql/solve/queries";
import { makeClient } from "@/lib/urlq";

const SolvePage = async () => {
  
  let {
    data,
    errors,
  }: {
    data: {
      challenges: {
        edges: { node: ChallengeType }[];
      };
    };
    errors: any[];
  } = await makeClient()
    .query(CHALLENGES, {
      offset: null,
      before: null,
      after: null,
      first: 10,
      last: null,
      orderBy:"-id"
    })
      .then((res: any) => res);
  
  return (
    <div className="flex flex-col pt-20 w-full h-full ">
      <div className="flex flex-col max-w-screen-2xl mx-auto w-full">
        <div className="p-2 grid sm:grid-cols-2 md:grid-cols-4 w-full gap-4 h-full py-10">
          {
            data?.challenges?.edges?.map(({ node: challange }: { node: ChallengeType }) => (
              <SingleQuiz key={challange.pk}
                challange={challange}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SolvePage;
