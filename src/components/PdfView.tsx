"use client";
import { useEffect, useState, createRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Dialog from "./Dialog";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDFpreview = ({ file, onClose }: { file: any; onClose: () => void }) => {
  console.log(file);
  const [numPages, setNumPages] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [starDownload, setStartDownload] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(false);
  function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
    setNumPages(numPages);
  }
  const handleScroll = (el: any) => {
    const scrollHeight = el.target.scrollHeight;
    const currenScrolledtHeight = el.target.scrollTop;
    if (!numPages) return;
    const averagePageHeight = scrollHeight / numPages;
    //  page starts from 1 top of page is page 1
    const currentPage =
      Math.ceil(currenScrolledtHeight / averagePageHeight) + 1;
    if (currentPage <= 0) return;
    setPageNumber(currentPage);
  };
  let pdfRef = createRef<HTMLDivElement>();
  useEffect(() => {
    // add event listener to scroll
    const scrollArea = pdfRef.current;
    scrollArea?.addEventListener("scroll", handleScroll);
    return () => {
      scrollArea?.removeEventListener("scroll", handleScroll);
    };
  }, [numPages]);

  return (
    <div>
      <Dialog
        close={() => {
          onClose();
          setOpen(false);
        }}
        className={`absolute top-0 z-10 h-screen min-h-screen min-w-full
            overflow-hidden bg-black 
           bg-opacity-60 p-3 xl:p-10`}
      >
        <div
          className={
            "relative flex h-full flex-col items-center justify-center  overflow-hidden"
          }
        >
          <div className="absolute right-4 top-2 z-50 space-x-4">
            <button
              className="rounded  border border-white bg-white 
                    p-2 text-black shadow-xl lg:bg-transparent lg:text-white"
              onClick={async () => {
                const link = document.createElement("a");
                link.href = file;
                link.target = "_blank";

                link.setAttribute("download", "file.pdf");
                document.body.appendChild(link);
                link.click();
                link.parentNode?.removeChild(link);
                setStartDownload(false);
              }}
              title="Download"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
            <button
              className="rounded  border border-white bg-white 
                    p-2 text-black shadow-xl lg:bg-transparent lg:text-white"
              onClick={() => {
                onClose();
              }}
              title="Close"
            >
              {starDownload ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className="relative m-auto flex
                 h-full max-w-screen-2xl flex-grow flex-col items-center justify-center "
          >
            <div
              ref={pdfRef}
              id="scrollArea"
              className=" w-full overflow-y-auto overflow-x-hidden bg-primaryBg"
            >
              <Document
                file={file}
                className="h-full w-full "
                onLoadError={(e: any) => {
                  console.log(e);
                  setError(true);
                }}
                onLoadSuccess={onDocumentLoadSuccess}
                error={
                  <div className="flex h-full flex-col items-center justify-center rounded px-10 py-2">
                    <div className="text-xl text-primaryText">
                      Error loading the pdf{" "}
                    </div>
                  </div>
                }
                loading={
                  <div className="flex h-full flex-col items-center justify-center rounded px-10 py-2">
                    <div className="text-xl text-primaryText">
                      Loading pdf...
                    </div>
                  </div>
                }
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>
            </div>
          </div>
          {!error && numPages && (
            <div className="absolute z-50 bottom-2 flex w-screen justify-center">
              <div className="rounded bg-primary px-3 py-1 text-sm text-accent shadow">
                Page {pageNumber} of {numPages}
              </div>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default PDFpreview;
