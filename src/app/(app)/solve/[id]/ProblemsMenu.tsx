"use client";

import Link from "next/link";
import { Fragment, useState } from "react";

const ProblemsMenu = ({
  challengechapterSet,
  id,
  problemNumber,
}: {
  challengechapterSet?: any[] | undefined;
  id: string;
  problemNumber: number;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <button
        onClick={() => setOpen(!open)}
        className="absolute top-20 bg-secondary p-2 shadow -mt-3 z-30 xl:hidden"
      >
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="bg-black/20 absolute inset-0 z-10 xl:hidden"
        ></div>
      )}
      <div
        className={`pt-10 xl:col-span-1 h-full min-h-full flex-col border-r border-secondary bg-primary 
        shadow  xl:relative ${
          open
            ? "absolute z-50  flex w-64 max-w-[70%] xl:w-full xl:max-w-full"
            : "hidden xl:flex"
        } h-full overflow-auto`}
      >
        {challengechapterSet?.map((chapter) => {
          return (
            <div className="flex flex-col w-full px-0.5" key={chapter?.pk}>
              <Link
                href={`/solve/${id}?chapter=${chapter?.pk}`}
                className={`font-semibold capitalize 2xl:px-4`}
              >
                {chapter?.title}
              </Link>
              <div className="flex flex-col  py-2">
                {chapter?.problemSet?.edges.map((problem: any) => {
                  return (
                    <Link
                      href={`/solve/${id}?chapter=${chapter?.pk}&problem=${problem?.node?.problemNumber}`}
                      className={`flex flex-col px-2 2xl:px-8 py-2 
                        ${
                          problem?.node?.problemNumber === problemNumber
                            ? "bg-secondary w-full text-accent rounded"
                            : ""
                        }
                        `}
                      key={problem?.node?.pk}
                    >
                      <span className="font-normal capitalize">
                        {problem?.node?.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ProblemsMenu;
