"use client";
import { UserType } from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import image from "@/assets/user.svg";
import THemeSwitch from "./ThemeSwitch";
import React from "react";

const Header = ({ user }: { user: UserType }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    console.log(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex py-2 fixed top-0 w-full z-20
        ${
          scrolled || path !== "/"
            ? "bg-primary border-secondary border-b"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-screen-2xl mx-auto w-full flex md:flex-row flex-col md:items-center md:justify-between">
        <div className="flex flex-row  justify-between items-center w-full">
          <div className="py-2 px-2 xl:px-0">
            <Link
              href="/"
              className="font-extrabold text-white text-2xl bg-accent py-2 px-4"
            >
              Physics Dojo
            </Link>
          </div>
          <button
            className={`md:hidden px-2 py-2 rounded-md`}
            onClick={() => setOpen(!open)}
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
          <div
            className={`
            ${
              open
                ? "absolute  flex w-screen h-screen text-white md:text-textColor z-50 top-0"
                : "hidden md:flex"
            } 
               md:space-y-0
              md:flex md:flex-row flex-col md:items-center md:flex-grow`}
          >
            {open && (
              <div
                className="md:hidden w-full h-full bg-black/40 top-0 inset-0 absolute z-40"
                onClick={() => setOpen(false)}
              ></div>
            )}
            <div
              className={`${
                scrolled || path !== "/" ? "text-textColor" : "text-white"
              }  flex md:flex-row flex-col 
                ${
                  open
                    ? "z-50 md:z-auto bg-primary md:bg-transparent w-[80%] md:w-auto h-full text-xl py-10 md:py-0 space-y-4 md:space-y-0 top-0"
                    : ""
                }
                `}
            >
              <Link
                href="/learn"
                className={`px-4 py-2 rounded-md
            ${path === "/learn" ? "text-accent underline" : ""}
            `}
              >
                Learn
              </Link>
              <Link
                href="/research"
                className={`px-4 py-2 rounded-md
            ${path === "/research" ? "text-accent underline" : ""}
            `}
              >
                Research
              </Link>
              <Link
                href="/solve"
                className={`px-4 py-2 rounded-md
            ${path === "/solve" ? "text-accent underline" : ""}
            `}
              >
                Solve
              </Link>
              <a
                href="https://app.haq.ai"
                target="_blank"
                className="px-4 py-2 rounded-md"
              >
                Discuss
              </a>
            </div>
          </div>
          {!user ? (
            <div
              className={`${
                scrolled || path !== "/" ? "text-textColor" : "text-white"
              } space-x-4`}
            >
              <Link
                href="/auth/login"
                className="px-7 py-2 rounded-md bg-accent text-white border-accent border-2 border-accent/90"
              >
                Sign In
              </Link>
              <Link
                href="/auth/register"
                className="px-7 py-2 rounded-md border-2 border-accent"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div
              className={`${
                scrolled || path !== "/" ? "text-textColor" : "text-white"
              } flex px-4 md:px-0 space-x-3 justify-center items-center`}
            >
              <Image
                src={user?.image || image.src}
                width={50}
                height={50}
                alt={user?.username || "User"}
                className="rounded-full w-10 border aspect-square object-cover object-center"
              />
              <THemeSwitch />
              <span className="bg-accent/30 rounded-full px-2 py-1  overflow-hidden flex justify-center items-center border-accent border">
                {user.eigenTokens < 10
                  ? `0${user.eigenTokens}`
                  : user.eigenTokens}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
