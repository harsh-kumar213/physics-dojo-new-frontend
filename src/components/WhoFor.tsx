import Link from "next/link";

const WhoFor = () => {
  return (
    <div className="w-full py-10 px-5 bg-primary">
      <div className="w-full justify-center items-center flex flex-col space-y-3">
        <h2 className="font-extrabold text-xl">Who is Physics Dojo for?</h2>
        <span className="bg-accent h-2 w-20"></span>
      </div>
      <div className="max-w-screen-2xl mx-auto w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
        <div className="flex flex-col space-y-3 rounded-3xl  hover:shadow-lg hover:shadow-sky-700  hover:scale-105 justify-center items-center px-3 ">
          <div className="py-2 flex">
            <span className="bg-[#CBBDEA] py-1 px-4 rounded-full">
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
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </span>
          </div>
          <h2 className="text-xl">Enthusiasts</h2>
          <p className="xl:w-[70%]">
            haq acts as a repository for fun problems and challenges that are
            being designed and updated by the day, meaning that you can learn a
            lot, regardless of whether you have a direct motive or not
          </p>
        </div>
        <div className="flex flex-col space-y-3 rounded-3xl  hover:shadow-lg hover:shadow-sky-700  hover:scale-105 justify-center items-center px-3 ">
          <div className="py-2 flex">
            <span className="bg-[#FFB2F5] py-1 px-4 rounded-full">
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
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </span>
          </div>
          <h2 className="text-xl">Students</h2>
          <p className="xl:w-[70%]">
            With custom challenges coming out, you can test your knowledge of
            fields ranging from QEC to QML by solving research-based problems
          </p>
        </div>
        <div className="flex flex-col space-y-3 rounded-3xl  hover:shadow-lg hover:shadow-sky-700 hover:scale-105 justify-center items-center px-3 ">
          <div className="py-2 flex">
            <span className="bg-[#60CEFF] py-1 px-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <title>sofa-single</title>
                <path d="M5 9.15V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7V9.16C17.84 9.57 17 10.67 17 11.97V14H7V11.96C7 10.67 6.16 9.56 5 9.15M20 10C18.9 10 18 10.9 18 12V15H6V12C6 10.9 5.11 10 4 10S2 10.9 2 12V17C2 18.1 2.9 19 4 19V21H6V19H18V21H20V19C21.1 19 22 18.1 22 17V12C22 10.9 21.1 10 20 10Z" />
              </svg>
            </span>
          </div>
          <h2 className="text-xl">Educators</h2>
          <p className="xl:w-[70%]">
            haq acts as a bridge between theoretical and pracical work, and
            could be a great supplementary tool for teaching QC/QI
          </p>
        </div>
        <div className="flex flex-col space-y-3 rounded-3xl  hover:shadow-lg hover:shadow-sky-700 hover:scale-105 justify-center items-center px-3 ">
          <div className="py-2 flex">
            <span className="bg-[#FFADB7] py-1 px-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <title>sofa-outline</title>
                <path d="M16,15H8V5H16M16,1H8C6.89,1 6,1.89 6,3V17A2,2 0 0,0 8,19H16A2,2 0 0,0 18,17V3C18,1.89 17.1,1 16,1M8,23H16V21H8V23Z" />
              </svg>
            </span>
          </div>
          <h2 className="text-xl">Hackathon</h2>
          <p className="xl:w-[70%]">
            haq, by design, is a competitive quantum computing platform, so
            whether you want to host or attend a hackathon, we’re here for you!
          </p>
        </div>
      </div>
      <div className="w-full justify-center items-center flex flex-col space-y-3">
        <Link
          href="/auth/register"
          className="bg-accent hover:bg-white hover:text-black  shadow py-2 px-5 rounded text-white"
        >
          Sign up Now
        </Link>
      </div>
    </div>
  );
};

export default WhoFor;
