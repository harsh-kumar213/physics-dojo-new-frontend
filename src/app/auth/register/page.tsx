"use client";
import { registerAction } from "@/actions/auth";
import Link from "next/link";
import { FormEvent, useState } from "react";

const RegisterPage = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [fieldErrors, setFieldErrors] = useState<any>({});
  const [nonFieldErrors, setNonFieldErrors] = useState<any[]>([]);
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFieldErrors([]);
    setNonFieldErrors([]);
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password1 = formData.get("password1") as string;
    const password2 = formData.get("password2") as string;

    // create form data

    registerAction({
      username,
      email,
      password1,
      password2,
    })
      .then((res: any) => {
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
  const getFieldsError = (field: string) => {
    let errors: any[] = [];
    errors = fieldErrors[field] || [];
    console.log(errors);
    return errors;
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
      {
        // success
        success && (
          <div className="bg-green-200 text-green-400 p-2 rounded capitalize">
            <div>
              account created please check the given email to verify your
              account
            </div>
          </div>
        )
      }
      <div className="flex flex-col space-y-1">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          className="border-textColor bg-transparent rounded border px-4"
          id="username"
        />
        {
          // field errors
          getFieldsError("username").map((err) => (
            <div key={err.message} className="text-red-400 text-xs">
              {err.message}
            </div>
          ))
        }
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="border-textColor  bg-transparent rounded border px-4"
          id="email"
        />
        {
          // field errors
          getFieldsError("email").map((err) => (
            <div key={err.message} className="text-red-400 text-xs">
              {err.message}
            </div>
          ))
        }
      </div>
      <div className="flex flex-col space-y-1 py-2 ">
        <label htmlFor="password1">Password</label>
        <input
          type="password"
          name="password1"
          className="border-textColor  bg-transparent rounded border py-2 px-4"
          id="password1"
        />
        {
          // field errors
          getFieldsError("password1").map((err) => (
            <div key={err.message} className="text-red-400 text-xs">
              {err.message}
            </div>
          ))
        }
      </div>
      <div className="flex flex-col space-y-1 py-2 ">
        <label htmlFor="password2">Confirm Password</label>
        <input
          type="password"
          name="password2"
          className="border-textColor  bg-transparent rounded border py-2 px-4"
          id="password2"
        />
        {
          // field errors
          getFieldsError("password2").map((err) => (
            <div key={err.message} className="text-red-400 text-xs">
              {err.message}
            </div>
          ))
        }
      </div>
      <div className="w-full">
        <label htmlFor="terms">
          <input type="checkbox" name="terms" className="mr-2" required />I
          agree to the  
          <Link href="/terms-conditions" className="text-blue-500">
            { " " }terms and conditions
          </Link>
        </label>
      </div>
      <div className="w-full py-5">
        <button className="w-full  py-2 text-primary rounded shdow bg-blue-500">
          Register
        </button>
      </div>
      <div className="w-full ">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-500">
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterPage;
