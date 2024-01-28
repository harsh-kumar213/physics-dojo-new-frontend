import { ResearchTaskType } from "@/gql/graphql";
import { RESEARCH_QUERY } from "@/graphql/research/queries";
import { makeClient } from "@/lib/urlq";
import Image from "next/image";
import Link from "next/link";

const Research = async () => {
  let {
    data,
    errors,
  }: {
    data: {
      allResearchTasks: {
        edges: { node: ResearchTaskType }[];
      };
    };
    errors: any[];
  } = await makeClient()
    .query(RESEARCH_QUERY, {
      offset: null,
      before: null,
      after: null,
      first: 10,
      last: null,
    })
    .then((res: any) => res);

  return (
    <div className="flex flex-col bg-primary pt-20 w-full h-full ">
      <div className="flex flex-col pt-3 justify-center items-center max-w-screen-2xl mx-auto w-full">
        <h2 className="text-3xl font-bold">Research Topics</h2>
        <div className="flex flex-col  p-2 md:w-[80%] gap-4  md:h-full py-10">
          {data?.allResearchTasks?.edges?.map(
            ({ node: task }: { node: ResearchTaskType }) => (
              <div
                key={task.pk}
                className="bg-cyan-600 text-white border-textColor border shadow md:aspect-[6/1] rounded-md flex md:flex-row flex-col p-2 gap-2  md:divide-x divide-textColor"
              >
                <div className="flex flex-col md:w-[50%] md:flex-row flex-grow">
                  <div className="w-auto h-48 md:aspect-[5/4] rounded overflow-hidden">
                    {task.image && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${task.image}`}
                        alt={task.title}
                        layout="responsive"
                        objectFit="cover"
                        className=" rounded h-full w-full object-cover object-center aspect-[11/5] md:aspect-square"
                        width={200}
                        height={200}
                      />
                    )}
                  </div>
                  <div className="md:h-full w-[55%] flex flex-col py-4 px-4 ">
                    <h2 className="text-2xl font-bold">{task.title}</h2>
                    <p className="w-[90%]">{task.miniDescription}</p>
                  </div>
                </div>
                <div className="flex-auto flex flex-col justify-center space-y-3 px-2">
                  <div className="flex md:flex-col flex-row">
                    <span>
                      <span className="font-bold"> Total Submisions :</span>
                      {task.allSubmissions?.totalCount}{" "}
                    </span>
                    <span>
                      <span className="font-bold"> Approved Submisions :</span>{" "}
                      {task.approvedSubmissions?.totalCount}{" "}
                    </span>
                    <span>
                      <span className="font-bold"> Added :</span>
                      {new Date(task.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex">
                    <div className="flex  border divide-x border-textColor divide-textColor">
                      <Link
                        href="/research/1"
                        className="bg-primary text-textColor px-5 py-1"
                      >
                        View Task
                      </Link>
                      <button className="px-4 bg-primary text-textColor">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Research;
