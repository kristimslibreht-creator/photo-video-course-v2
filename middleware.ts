import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // что защищаем
  const isCourseRoute =
    pathname === "/course" || pathname.startsWith("/course/");

  // что не трогаем
  const isPublic =
    pathname === "/" ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/buy") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon");

  if (!isCourseRoute || isPublic) return NextResponse.next();

  const access = req.cookies.get("course_access")?.value;
  if (access === "1") return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/course/:path*"],
};
