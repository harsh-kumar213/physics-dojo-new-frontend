"use client";
import { reqResetPasswordAction } from "@/actions/auth";
import { FormEvent, useState } from "react";
import Link from "next/link";

const ResetPasswordPage = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [fieldErrors, setFieldErrors] = useState<any[]>([]);
  const [nonFieldErrors, setNonFieldErrors] = useState<any[]>([]);
  const handleRest = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFieldErrors([]);
    setNonFieldErrors([]);
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;

    reqResetPasswordAction({
      email,
    })
      .then((res: any) => {
        console.log(res);
        if (res.error) {
          if (res.error.nonFieldErrors) {
            setNonFieldErrors(res.error.nonFieldErrors);
          } else {
            setFieldErrors(res.error);
          }
        } else {
          setSuccess(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleRest} className="w-full text-textColor space-y-4">
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
      {success && (
        <div className="bg-green-200 text-green-400 p-2 rounded">
          Check your email for reset instructions
        </div>
      )}
      <div className="flex flex-col space-y-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="border-textColor bg-transparent rounded border px-4"
          id="email"
        />
      </div>

      <div className="w-full py-5">
        <button className="w-full  py-2 text-primary rounded shdow bg-blue-500">
          Request Reset
        </button>
      </div>
      <div className="w-full ">
        Remember your password?
        <Link href="/auth/login" className="text-blue-500">
          Login
        </Link>
      </div>
    </form>
  );
};

export default ResetPasswordPage;
