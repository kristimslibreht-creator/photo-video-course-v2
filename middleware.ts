import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // защищаем только курс
  if (!pathname.startsWith("/course")) {
    return NextResponse.next();
  }

  const access = req.cookies.get("course_access")?.value;

  // ✅ админ и пользователь проходят
  if (access === "admin" || access === "user") {
    return NextResponse.next();
  }

  // ❌ остальные — на логин
  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/course/:path*"],
};
