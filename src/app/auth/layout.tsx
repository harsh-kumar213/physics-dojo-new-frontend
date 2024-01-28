import auth_bg from "@/assets/auth.ab949c50.svg";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full min-h-screen h-screen">
      <div className="h-full w-full grid md:grid-cols-2">
        <div
          className="w-full bg-cover bg-center aspect-[5/4] lg:aspect-auto "
          style={{ backgroundImage: `url(${auth_bg.src})` }}
        ></div>
        <div className="flex flex-col justify-between items-center bg-primary">
          <div className="flex w-full pb-10 pt-20 max-w-lg mx-auto px-4 relative ">
            <span className="rounded-full font-extrabold flex justify-center items-center py-2 px-2 md:px-4 bg-accent -rotate-6  absolute text-2xl">
              Physics Dojo
            </span>
            <span className="rounded-full absolute font-extrabold flex justify-center items-center py-2 px-2 md:px-4 bg-accent rotate-6   text-2xl">
              Physics Dojo
            </span>
            <Link
              href="/"
              className="rounded-xl font-extrabold text-white text-2xl bg-accent py-2 px-2 md:px-4 absolute"
            >
              Physics Dojo
            </Link>
          </div>
          <div className="w-full flex flex-col px-5 max-w-lg">{children}</div>
          <div className="lg:py-32"></div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
