import banner from "@/assets/banner.svg";
import Link from "next/link";

const Banner = () => {
  return (
    
      
          <div className="z-10 w-full flex flex-col bg-primary justify-center items-center">
            <div className="z-10 flex w-full py-8 px-4 flex-col  items-center justify-cneter  max-w-lg space-y-8">
              <h1 className="text-6xl font-extrabold uppercase">
                 Physics Dojo
              </h1>
              <p className="capitalize font-semibold">
                Best way to learn Physics.
              </p>
              <Link
                href="/auth/login"
                className="bg-textColor hover:bg-accent text-primary px-8 py-2 rounded-md mt-4"
              >
                Get Started
              </Link>
            </div>
            
          </div>
      
    
  );
};

export default Banner;
