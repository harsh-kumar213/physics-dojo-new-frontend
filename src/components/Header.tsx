"use client";
import { UserType } from "@/gql/graphql";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import ProfileMenu from "./ProfileMenu";
import React from "react";

const Header = ({ user }: { user: UserType }) => {
  const router = useRouter();
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
    router.refresh();
    setOpen(false);
  }, [path]);
  useEffect(() => {
    console.log(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex py-2  top-0 w-full z-20
        ${
          scrolled || path !== "/"
            ? "fixed bg-primary  border-b shadow"
            : "bg-primary"
        }
      `}
    >
      <div className="max-w-screen-2xl mx-auto w-full flex md:flex-row flex-col md:items-center md:justify-between">
        <div className="flex flex-row  justify-around items-center w-full mx-2">
          <div className="py-0.5 px-1 sm:px-2 xl:px-0 w-28 sm:w-40 ">
            
            <Link
              href="/"
              className=" font-bold flex rounded-3xl text-tex-color text-lg py-1 px-2 sm:px-2 sm:font-extrabold sm:w-full  hover:outline-2 hover:outline-gray-50 sm:px-4 lg:text-2xl"
            >
              PhysicsDojo
            </Link>
          </div>
          <button
            className={`
            ${scrolled || path !== "/" ? "text-textColor" : "text-textColor"}
            sm:hidden mx-0 py-2 rounded-md `}
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
                ? "absolute  flex w-screen h-screen text-textColor sm:text-textColor z-50 top-0"
                : "hidden sm:flex"
            } 
               sm:space-y-0
              sm:flex sm:flex-row flex-col sm:items-center `}
          >
            {open && (
              <div
                className="sm:hidden w-full h-full bg-black/40 top-0 inset-0 absolute z-40"
                onClick={() => setOpen(false)}
              ></div>
            )}
            <div
              className={`${
                scrolled || path !== "/"
                  ? "text-textColor"
                  : "sm:text-textColor"
              }  flex sm:flex-row flex-col 
                ${
                  open
                    ? "z-50 sm:z-auto bg-primary sm:bg-transparent w-[80%] sm:w-auto h-full text-xl py-10 md:py-0 space-y-4 sm:space-y-0 top-0"
                    : ""
                }
                `}
            >
              <Link
                href="/learn"
                className={`px-4 font-bold hover:text-purple-700 sm:ml-10 py-2 rounded-md
            ${path === "/learn" ? "text-accent underline" : ""}
            `}
              >
                Learn
              </Link>
              <Link
                href="/solve"
                className={`px-4 font-bold hover:text-purple-700  py-2 rounded-md
            ${path === "/solve" ? "text-accent underline" : ""}
            `}
              >
                Solve
              </Link>
              <Link
                href="/research"
                className={`px-4 font-bold hover:text-purple-700  py-2 rounded-md
            ${path === "/research" ? "text-accent underline" : ""}
            `}
              >
                Research
              </Link>
              <a
                href="https://discord.gg/physics"
                target="_blank"
                className="px-4 font-bold hover:text-purple-700  py-2 rounded-md"
              >
                Discuss
              </a>
            </div>
          </div>
          {!user ? (
            <div
              className={`${
                scrolled || path !== "/" ? "text-textColor" : "text-color"
              } space-x-4 flex justify-center items-center mr-0 w-60`}
            >
              <Link
                href="/auth/login"
                className="px-4 text-xs py-2 rounded-md  text-color border-accent border-2 border-accent/90  w-full hover:bg-accent sm:w-[80px] font-bold "
              >
                Sign In
              </Link>
              <Link
                href="/auth/register"
                className="px-4 text-xs py-2 rounded-md border-2 border-accent w-full text-textColor  hover:bg-accent hover:text-white sm:w-[80px] font-bold"
              >
                Sign Up
              </Link>
              <ThemeSwitch />
            </div>
          ) : (
            <div
              className={`${
                scrolled || path !== "/" ? "text-textColor" : "text-white"
              } flex pr-1 md:px-0 space-x-3 justify-center items-center`}
            >
              <ProfileMenu user={user} />
              <ThemeSwitch />
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
