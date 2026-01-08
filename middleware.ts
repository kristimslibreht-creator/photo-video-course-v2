// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_ADMIN, COOKIE_COURSE } from "@/lib/auth";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // защищаем только раздел курса
  if (pathname.startsWith("/course")) {
    const hasCourse = req.cookies.get(COOKIE_COURSE)?.value === "1";
    const hasAdmin = req.cookies.get(COOKIE_ADMIN)?.value === "1";

    if (!hasCourse && !hasAdmin) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/course/:path*"],
};
