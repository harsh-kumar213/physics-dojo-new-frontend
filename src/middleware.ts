import { NextResponse, NextRequest } from "next/server";

export const middleware = async (req: NextRequest) => {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-next-pathname", req.nextUrl.pathname);

  const token = req.cookies.get("token");
  const res = NextResponse.next();
  const url = req.nextUrl.clone();

  if (!token) {
    url.pathname = "/auth/login";
    url.searchParams.set("next", req.nextUrl.pathname);
    return NextResponse.redirect(url.toString(), {
      headers: requestHeaders,
    });
  }

  return NextResponse.next({
    ...res,
    headers: requestHeaders,
  });
};

export const config = {
  matcher: [
    "/solve/:id/:path*",
    "/learn/:id/:path*",
    "/dashboard/:path*",
  ],
};
