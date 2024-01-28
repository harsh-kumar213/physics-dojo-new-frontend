"use client";
import { resetPasswordAction } from "@/actions/auth";
import Link from "next/link";
import { FormEvent, useState } from "react";

const PasswordResetPage = ({
  params: { token },
}: {
  params: { token: string };
}) => {
  const formatedToken = decodeURIComponent(token);
  const [success, setSuccess] = useState<boolean>(false);
  const [fieldErrors, setFieldErrors] = useState<any>({});
  const [nonFieldErrors, setNonFieldErrors] = useState<any[]>([]);
  const handleReset = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const newPassword1 = formData.get("newPassword1") as string;
    const newPassword2 = formData.get("newPassword2") as string;

    resetPasswordAction({
      token: formatedToken,
      newPassword1,
      newPassword2,
    })
      .then((res: any) => {
        if (res.error) {
          if (res.error.nonFieldErrors) {
            setNonFieldErrors(res.error.nonFieldErrors);
          } else {
            setFieldErrors(res.error);
          }
        } else {
          setNonFieldErrors([]);
          setFieldErrors([]);
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
    return errors;
  };
  return (
    <form onSubmit={handleReset} className="w-full text-textColor space-y-4">
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
          Password reset successful.{" "}
          <Link href="/auth/login" className="text-blue-500">
            Login
          </Link>
        </div>
      )}

      <div className="flex flex-col space-y-1">
        <label htmlFor="newPassword1">New Password</label>
        <input
          type="password"
          name="newPassword1"
          className="border-textColor bg-transparent rounded border px-4"
          id="newPassword1"
        />
        {
          // field errors
          getFieldsError("newPassword1").map((err) => (
            <div key={err.message} className="text-red-400 text-xs">
              {err.message}
            </div>
          ))
        }
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="newPassword2">Confirm New Password</label>
        <input
          type="password"
          name="newPassword2"
          className="border-textColor bg-transparent rounded border px-4"
          id="newPassword2"
        />
        {
          // field errors
          getFieldsError("newPassword2").map((err) => (
            <div key={err.message} className="text-red-400 text-xs">
              {err.message}
            </div>
          ))
        }
      </div>

      <div className="w-full py-5">
        <button className="w-full  py-2 text-primary rounded shdow bg-blue-500">
          Reset Password
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

export default PasswordResetPage;
