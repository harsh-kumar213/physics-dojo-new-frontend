import Footer from "@/components/Footes";
import Header from "@/components/Header";
import { UserType } from "@/gql/graphql";
import { ME } from "@/graphql/auth/queries";
import { makeClient } from "@/lib/urlq";
import { cookies } from "next/headers";
import { headers } from "next/headers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const clientCookies = cookies();
  const pathname = headers().get("x-next-pathname") as string;
  let {
    data,
    errors,
  }: {
    data: {
      me: UserType;
    };
    errors: any[];
  } = await makeClient({
    Authorization: `JWT ${clientCookies.get("token")?.value || ""}`,
  })
    .query(ME, {})
    .then((res: any) => res);
  return (
    <div className="flex flex-col min-h-screen bg-primary ">
      <Header user={data?.me} />
      <div className="flex flex-col md:min-h-screen text-textColor justify-between">
        {children}
        {!pathname?.startsWith("/solve/") &&
          !pathname?.startsWith("/learn/") && <Footer />}
      </div>
    </div>
  );
}
