import { VerifyAccount } from "@/gql/graphql";
import { VERIFY_ACCOUNT } from "@/graphql/auth/mutations";
import { makeClient } from "@/lib/urlq";
import Link from "next/link";

const AvtivateAccountPage = async ({
  params: { token },
}: {
  params: { token: string };
}) => {
  //   convert token to raw string
  const tokenString = decodeURIComponent(token);
  let {
    data,
    errors,
  }: {
    data: { verifyAccount: VerifyAccount };
    errors: any[];
  } = await makeClient()
    .mutation(VERIFY_ACCOUNT, {
      token: tokenString,
    })
    .then((res: any) => res);

  return (
    <div className="flex flex-col w-full py-2">
      {data?.verifyAccount?.errors && (
        <div className="bg-red-200 text-red-400 p-2 rounded">
          {data?.verifyAccount?.errors?.nonFieldErrors?.map((err: any) => (
            <div key={err.message}>{err.message}</div>
          ))}
        </div>
      )}
      <div className="flex flex-col w-full">
        {data?.verifyAccount?.success && (
          <div className="flex flex-col w-full">
            <div>Account verified successfully</div>
            <div className="mb-6">Now you can login</div>
            <Link
              href="/auth/login"
              className="flex items-center text-white bg-blue-500 w-full justify-center py-1 px-4 j hover:bg-blue-600"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvtivateAccountPage;
