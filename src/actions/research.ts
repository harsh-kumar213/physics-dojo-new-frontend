"use server";

import {
  CreateResearchSubmission,
  MutationsCreateResearchSubmissionArgs,
  MutationsSignS3Args,
  SignS3,
} from "@/gql/graphql";
import { SIGN_FILE } from "@/graphql/mutations";
import { CREATE_RESEARCH_SUBMISSION } from "@/graphql/research/mutations";
import { makeClient } from "@/lib/urlq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const signeFile = async (variables: MutationsSignS3Args) => {
  const clientCookies = cookies();
  const token = clientCookies.get("token")?.value || "";
  let {
    data,
    errors,
  }: {
    data: { signS3: SignS3 };
    errors: any[];
  } = await makeClient({
    Authorization: `JWT ${token}`,
  })
    .mutation(SIGN_FILE, variables)
    .then((res: any) => res);
  return { data, errors };
};

const createResearchSubmission = async (
  variables: MutationsCreateResearchSubmissionArgs
) => {
  const clientCookies = cookies();
  const token = clientCookies.get("token")?.value || "";
  let {
    data,
    errors,
  }: {
    data: { createResearchSubmission: CreateResearchSubmission };
    errors: any[];
  } = await makeClient({
    Authorization: `JWT ${token}`,
  })
    .mutation(CREATE_RESEARCH_SUBMISSION, variables)
    .then((res: any) => res);
  revalidatePath("/research");
  revalidatePath(`/research/${variables.researchTask}`);
  return { data, errors };
};

export { signeFile, createResearchSubmission };
