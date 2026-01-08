// lib/auth.ts
import { cookies } from "next/headers";

export const COOKIE_COURSE = "course_access";
export const COOKIE_ADMIN = "admin_access";

export function setCourseAccess() {
  cookies().set(COOKIE_COURSE, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 год
  });
}

export function setAdminAccess() {
  cookies().set(COOKIE_ADMIN, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
}

export function clearAccess() {
  cookies().set(COOKIE_COURSE, "", { path: "/", maxAge: 0 });
  cookies().set(COOKIE_ADMIN, "", { path: "/", maxAge: 0 });
}
