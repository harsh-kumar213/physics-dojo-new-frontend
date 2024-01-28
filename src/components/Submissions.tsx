"use client";
import PDFpreview from "@/components/PdfView";
import { ResearchSubmissionsType } from "@/gql/graphql";
import { Fragment, useState } from "react";

const Submissions = ({
  approvedSubmissions,
}: {
  approvedSubmissions: ResearchSubmissionsType[];
}) => {
  const [viewSubmissions, setViewSubmissions] =
    useState<ResearchSubmissionsType | null>(null);
  return (
    <Fragment>
      {viewSubmissions && (
        <PDFpreview
          file={viewSubmissions?.filePath}
          onClose={() => setViewSubmissions(null)}
        />
      )}
      {approvedSubmissions.map((submission) => (
        <button
          onClick={() => setViewSubmissions(submission)}
          className="flex w-full flex-col shadow px-4 py-2 border border-secondary"
          key={submission?.pk}
        >
          <span className="text-blue-500 italic text-left">
            {submission.title}
          </span>
          <div className="flex w-full justify-between">
            <span>
              <span className="text-gray-500">By: </span>
              <span className="text-blue-500 ">
                {submission.user?.firstName} {submission.user?.lastName}
              </span>
            </span>
            <span>
              <span className="text-gray-500 text-xs">On: </span>
              <span className="text-blue-500 text-xs">
                {new Date(submission.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </span>
          </div>
        </button>
      ))}
    </Fragment>
  );
};

export default Submissions;
