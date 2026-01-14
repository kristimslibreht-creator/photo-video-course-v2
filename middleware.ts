import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ACCESS_COOKIE } from "./lib/auth";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // защищаем только курс
  const isCourse = pathname === "/course" || pathname.startsWith("/course/");
  if (!isCourse) return NextResponse.next();

  const hasAccess = req.cookies.get(ACCESS_COOKIE)?.value === "1";
  if (hasAccess) return NextResponse.next();

  const loginUrl = new URL("/login", req.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/course/:path*"],
};
