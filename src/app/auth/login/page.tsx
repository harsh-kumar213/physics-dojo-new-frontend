"use client";
import { loginAction } from "@/actions/auth";
import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();
  let query = useSearchParams();
  let next = query.get("next");
  const [fieldErrors, setFieldErrors] = useState<any[]>([]);
  const [nonFieldErrors, setNonFieldErrors] = useState<any[]>([]);
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFieldErrors([]);
    setNonFieldErrors([]);
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    // create form data

    loginAction({
      email,
      password,
    })
      .then((res: any) => {
        if (res.error) {
          if (res.error.nonFieldErrors) {
            setNonFieldErrors(res.error.nonFieldErrors);
          } else {
            setFieldErrors(res.error);
          }
        } else {
          router.push(next || "/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleLogin} className="w-full text-textColor space-y-4">
      {
        // non field errors
        nonFieldErrors.length > 0 && (
          <div className="bg-red-200 text-red-400 p-2 rounded">
            {nonFieldErrors.map((err) => (
              <div key={err.message}>{err.message}</div>
            ))}
          </div>
        )
      }
      <div className="flex flex-col space-y-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="border-textColor bg-transparent rounded border px-4"
          id="email"
        />
      </div>
      <div className="flex flex-col space-y-1 py-2 ">
        <label htmlFor="email">Password</label>
        <input
          type="password"
          name="password"
          className="border-textColor bg-transparent rounded border py-2 px-4"
          id="password"
        />
      </div>
      <div className="w-full py-5">
        <button className="w-full  py-2 text-primary rounded shdow bg-blue-500">
          Login
        </button>
      </div>
      <div className="w-full flex justify-between items-center">
        <p>
          Dont have an account?{" "}
          <Link href="/auth/register" className="text-blue-500">
            Register
          </Link>
        </p>
        <Link href="/auth/password-reset" className="text-blue-500">
          Forgot Password?
        </Link>
      </div>
    </form>
  );
};

export default LoginPage;
