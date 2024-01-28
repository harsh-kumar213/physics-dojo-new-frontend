"use client";
import { ChallengeType } from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";

const PracticeQuiz = ({ challenges }: { challenges: ChallengeType[] }) => {
  const countProblems = (challenge: ChallengeType) => {
    let problems = 0;
    for (let chapter of challenge.challengechapterSet.edges) {
      problems += chapter?.node?.problemSet?.totalCount || 0;
    }
    return problems;
  };
  return (
    <div className="flex flex-col w-full py-10 border-secondary border-t-2 ">
      <div className="flex max-w-screen-2xl mx-auto w-full px-2">
        <h2 className="font-bold uppercase text-xl">TOP ATTEMPTED QUIZ</h2>
        {/* <div className="border-secondary border-t-2 flex-auto mx-5 relative mt-3"></div> */}
      </div>
      <div className="grid md:grid-cols-3 px-2 py-6 max-w-screen-2xl mx-auto w-full gap-3">
        {challenges &&
          challenges.map((challenge, i) => (
            <div className="flex flex-col  aspect-[11/4] relative mb-5" key={i}>
              <Link
                href={`/solve/${challenge.pk}`}
                className="flex w-full px-3 border-primary bg-secondary items-center gap-4 justify-between h-full shadow border rounded-xl "
              >
                <div className="flex overflow-hidden">
                  <Image
                    src={
                      ((process.env.NEXT_PUBLIC_MEDIA_URL as string) +
                        challenge.image) as string
                    }
                    alt="Quantum Mechanics"
                    objectFit="cover"
                    width={100}
                    height={100}
                    className="p-1 aspect-square object-cover object-center "
                  />
                  <div className="flex flex-col justify-between h-full font-semibold">
                    <h2>{challenge.title}</h2>
                    <span>
                      <span className="font-light text-xs">
                        {countProblems(challenge)} Problems
                      </span>
                    </span>
                    <span>
                      <span className="font-light"></span>
                    </span>
                  </div>
                </div>
                {/* <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </span> */}
              </Link>
              <div className="absolute inset-y-full ml-[2.5%]  z-10 w-[95%] mx-auto">
                <div className="w-full h-full  bg-secondary shadow py-1 rounded-b-xl"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PracticeQuiz;
