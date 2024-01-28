"use server";
import {
  MutationsPasswordResetArgs,
  MutationsRegisterArgs,
  MutationsSendPasswordResetEmailArgs,
  MutationsTokenAuthArgs,
  ObtainJsonWebToken,
  PasswordReset,
  Register,
  ResendActivationEmail,
  SendPasswordResetEmail,
  UserNode,
} from "@/gql/graphql";
import {
  LOGIN,
  REGISTER,
  REQUEST_RESET_PASSWORD,
  RESEND_ACTIVATION_EMAIL,
  RESET_PASSWORD,
} from "@/graphql/auth/mutations";
import { ME } from "@/graphql/auth/queries";
import { makeClient } from "@/lib/urlq";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

const loginAction = async (variables: MutationsTokenAuthArgs) => {
  // extract the form data

  let clientCookies = cookies();
  const {
    data,
    errors,
  }: { data: { tokenAuth: ObtainJsonWebToken }; errors: any[] } =
    await makeClient()
      .mutation(LOGIN, variables)
      .then((res: any) => res);
  // if data set cookies for the user for 24 hours
  if (!errors) {
    let { tokenAuth } = data;
    let { token, user, errors } = tokenAuth;
    if (errors) {
      return { error: errors, data: null };
    }
    clientCookies.set({
      name: "token",
      maxAge: 60 * 60 * 24,
      value: token as string,
      path: "/",
      httpOnly: true,
    });
    // set user
    clientCookies.set({
      name: "user",
      maxAge: 60 * 60 * 24,
      value: JSON.stringify(user),
      path: "/",
      httpOnly: true,
    });
  }
  return { error: errors, data };
};

const registerAction = async (variables: MutationsRegisterArgs) => {
  let { data, errors }: { data: { register: Register }; errors: any } =
    await makeClient()
      .mutation(REGISTER, variables)
      .then((res: any) => res);
  if (!errors) {
    let { register } = data;
    let { success, errors } = register;
    if (errors) {
      return { error: errors, data: null };
    }
    return { error: null, data };
  }
  return { error: errors, data };
};

const resendVerificationAction = async (email: string) => {
  let variables = {
    email,
  };
  let {
    data,
    error,
  }: { data: { resendActivationEmail: ResendActivationEmail }; error: any } =
    await makeClient()
      .mutation(RESEND_ACTIVATION_EMAIL, variables)
      .then((res: any) => res);

  return { error, data };
};

const reqResetPasswordAction = async (
  variables: MutationsSendPasswordResetEmailArgs
) => {
  let {
    data,
    error,
  }: { data: { sendPasswordResetEmail: SendPasswordResetEmail }; error: any } =
    await makeClient()
      .mutation(REQUEST_RESET_PASSWORD, variables)
      .then((res: any) => res);

  return { error, data };
};

const logoutAction = async () => {
  cookies().delete("token");
  cookies().delete("user");
};

const resetPasswordAction = async (variables: MutationsPasswordResetArgs) => {
  let {
    data,
    errors,
  }: { data: { passwordReset: PasswordReset }; errors: any } =
    await makeClient()
      .mutation(RESET_PASSWORD, variables)
      .then((res: any) => res);
  if (!errors) {
    let { passwordReset } = data;
    let { success, errors } = passwordReset;
    if (errors) {
      return { error: errors, data: null };
    }
    return { error: null, data };
  }
  return { errors, data };
};

const reloadUser = async () => {
  revalidateTag("user");
  let clientCookies = cookies();
  let {
    data,
    graphQLErrors,
  }: {
    data: {
      me: UserNode;
    };
    graphQLErrors: any;
  } = await makeClient()
    .query(ME, {})
    .then((res: any) => res);
  if (data) {
    clientCookies.set({
      name: "user",
      maxAge: 60 * 60 * 24,
      value: JSON.stringify(data.me),
      path: "/",
      httpOnly: true,
    });
  }
  return { data, graphQLErrors };
};

export {
  loginAction,
  logoutAction,
  registerAction,
  resetPasswordAction,
  resendVerificationAction,
  reqResetPasswordAction,
  reloadUser,
};
