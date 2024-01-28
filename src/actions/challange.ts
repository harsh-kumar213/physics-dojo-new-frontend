"use server";

import {
  MutationsSolvedTheoryArgs,
  MutationsTestAnswerArgs,
  SolvedTheory,
  TestAnswer,
} from "@/gql/graphql";
import { SOLVED_THEORY, TEST_ASNSWER } from "@/graphql/solve/mutations";
import { makeClient } from "@/lib/urlq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const testAnswer = async (variables: MutationsTestAnswerArgs) => {
  const clientCookies = cookies();
  const token = clientCookies.get("token")?.value || "";
  let {
    data,
    errors,
  }: {
    data: { testAnswer: TestAnswer };
    errors: any[];
  } = await makeClient({
    Authorization: `JWT ${token}`,
  })
    .mutation(TEST_ASNSWER, variables)
    .then((res: any) => {
      console.log(res);
      return res;
    });
  revalidatePath("/solve");
  revalidatePath(`/solve/${variables.data.problemId}`);
  return { data, errors };
};

const submitTheory = async (variables: MutationsSolvedTheoryArgs) => {
  let clientCookies = cookies();

  const token = clientCookies.get("token")?.value || "";

  let {
    data,
    errors,
  }: {
    data: { solvedTheory: SolvedTheory };
    errors: any[];
  } = await makeClient({
    Authorization: `JWT ${token}`,
  })
    .mutation(SOLVED_THEORY, variables)
    .then((res: any) => res);
  revalidatePath("/solve");
  revalidatePath(`/solve/${variables.problemId}`);
  return { data, errors };
};

export { testAnswer, submitTheory };
