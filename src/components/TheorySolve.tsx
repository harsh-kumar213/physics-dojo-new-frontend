"use client";
import { submitTheory } from "@/actions/challange";
import { ProblemType } from "@/gql/graphql";
import { useState } from "react";

const TheorySolve = ({
  problemId,
  problem,
}: {
  problemId: number;
  problem: ProblemType;
}) => {
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <div className="flex flex-col w-full px-2">
      <div className="aspect-video w-full">
        <iframe
          className="aspect-video w-full"
          src={problem?.video as string}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      {success ? (
        <div className="absolute  bottom-4 right-2 z-50 rounded shadow bg-green-200 text-green-400 p-2">
          {message}
        </div>
      ) : null}
      <div className="py-4 justify-end flex w-full">
        <button
          onClick={async () => {
            let res = await submitTheory({
              problemId: problemId,
            });
            console.log(res);
            if (res.data.solvedTheory.eigenTokens) {
              setMessage(
                "You have earned " +
                  res.data.solvedTheory.eigenTokens +
                  " tokens for understanding the problem"
              );
              setSuccess(true);
              // start timer to remove the message in 5 seconds
              setTimeout(() => {
                setSuccess(false);
                setMessage("");
              }, 5000);
            }
          }}
          className=" bg-accent text-white py-2 px-5 rounded shadow"
        >
          Have understood
        </button>
      </div>
    </div>
  );
};

export default TheorySolve;
