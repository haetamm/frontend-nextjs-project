import { NextResponse } from "next/server";

export const middleware = (req) => {
  const token = req.cookies.get("token");
  const url = req.nextUrl.clone();

  const noAuthRequiredPages = ["/guest/login", "/guest/register"];

  if (token && noAuthRequiredPages.includes(url.pathname)) {
    url.pathname = "/home"; // Arahkan ke halaman home
    return NextResponse.redirect(url);
  }

  if (!token && !noAuthRequiredPages.includes(url.pathname)) {
    url.pathname = "/guest/login"; // Arahkan ke halaman login
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/profile",
    "/admin",
    "/create",
    "/update/:path*",
    "/guest/login",
    "/guest/register",
    "/my",
    "/my/likes",
  ],
};
