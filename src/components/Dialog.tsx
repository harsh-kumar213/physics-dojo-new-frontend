import React from "react";
import { useRef } from "react";

const Dialog = ({
  children,
  close,
  className,
}: {
  children: any;
  close: () => void;
  className?: string;
}) => {
  const overlay = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={overlay}
      className={`fixed z-30 left-0 right-0 top-0 bottom-0 mx-auto overflow-hidden
       bg-black/60 w-full py-20 h-full max-h-full ${className}`}
    >
      <button
        onClick={(e) => {
          close();
        }}
        className="z-20 absolute top-0 right-2 p-2 text-white "
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="overflow-auto flex flex-col h-full z-10">{children}</div>
    </div>
  );
};

export default Dialog;
