"use client";

import { createResearchSubmission, signeFile } from "@/actions/research";
import Dialog from "@/components/Dialog";
import { MutationsSignS3Args } from "@/gql/graphql";
import { FormEvent, useState } from "react";

const SubmitPaper = ({ id }: { id: number }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [dragenter, setDragenter] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const handleDrag = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragenter(true);
    } else if (e.type === "dragleave") {
      setDragenter(false);
    }
  };
  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragenter(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
      setDragenter(false);
    } else {
      setDragenter(false);
    }
  };

  const handleSubmission = async (e: FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError("");
    if (!file) {
      setError("Please upload a file");
      return;
    }
    let variables: MutationsSignS3Args = {
      fileSize: file.size,
      filename: "submission/" + Date.now() + file.name,
      filetype: file.type,
    };
    let res = await signeFile(variables);
    if (!res.data.signS3) return setError("Error uploading file");
    let url: string = res.data.signS3.url as string;

    let options = {
      method: "PUT",
      body: file,
      headers: {
        "Content-type": file.type,
        'Access-Control-Allow-Origin': '*',
      },
    };
    await fetch(url, { mode: "cors", cache: "no-cache", ...options })
      .then(async (res) => {
        let resw = await createResearchSubmission({
          title: title,
          researchTask: id,
          filePath: url.split("?")[0],
        });
        if (resw.data.createResearchSubmission) {
          setTitle("");
          setFile(null);
          setSuccess(true);
        }
      })
      .catch((err) => {
        alert("Error uploading file");
        err;
      });
  };

  return (
    <div className="flex flex-col py-2">
      <button
        onClick={() => setOpen(true)}
        className="bg-textColor text-primary px-4 py-1 rounded shadow"
      >
        Submit Paper
      </button>
      {open && (
        <Dialog close={() => setOpen(false)}>
          <form
            onSubmit={handleSubmission}
            className="max-w-screen-md h-full mx-auto w-full"
          >
            <div className="w-full bg-primary h-full mx-auto rounded p-4  overflow-auto">
              {success && (
                <div className="bg-green-500 text-white px-4 py-1 rounded mb-2">
                  Successfully submitted paper
                </div>
              )}
              {error && (
                <div className="bg-red-200 text-red-400  py-1 px-4 rounded mb-2">
                  {error}
                </div>
              )}
              <div className="flex flex-col space-y-2 w-full">
                <label className="text-textColor">Title</label>
                <input
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="bg-transparent px-4 py-2 rounded w-full"
                />
              </div>
              <div className="flex w-full py-4">
                <h2>File Upload</h2>
              </div>
              <div className="flex flex-col">
                <label
                  onDragEnter={handleDrag}
                  className="relative flex justify-center w-full py-4 px-4 transition \
       bg-primary border-secondary border-2 border-secondary border-gray-300 border-secondary border-dashed rounded-md \
        appearance-none cursor-pointer hover:border-secondary border-gray-400 focus:outline-none"
                >
                  {dragenter && (
                    <div
                      className="absolute inset-0 flex h-full w-full rounded-md  bg-primary/20"
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    />
                  )}
                  <div className="flex items-center flex-col space-y-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-20 h-20 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="font-lg ">Drop files to Attach, or</span>
                    <span className="text-textColor underline">browse</span>
                  </div>
                  <input
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setFile(e.target.files[0]);
                      }
                    }}
                    type="file"
                    name="file_upload"
                    // only pdf / docx
                    accept=".pdf,.docx"
                    multiple={true}
                    className="hidden"
                  />
                  <div className="flex flex-wrap space-x-2 absolute bg-secondary  rounded right-1 bottom-1">
                    {file && (
                      <div className="flex relative">
                        <span className="text-textColor px-7 py-1">
                          {file.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => setFile(null)}
                          className="absolute right-0 top-0 text-textColor hover:text-primary"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-red-400"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </label>
              </div>
              <div className="py-4">
                <button className="bg-textColor text-primary px-8 py-1 rounded shadow">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Dialog>
      )}
    </div>
  );
};

export default SubmitPaper;
