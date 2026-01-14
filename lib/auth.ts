import { cookies } from "next/headers";

export const ACCESS_COOKIE = "pv_access";
export const ROLE_COOKIE = "pv_role";

export function setAccessCookie(role: "student" | "admin") {
  const c = cookies();
  c.set(ACCESS_COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: true,
    maxAge: 60 * 60 * 24 * 30, // 30 дней
  });
  c.set(ROLE_COOKIE, role, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: true,
    maxAge: 60 * 60 * 24 * 30,
  });
}

export function clearAccessCookie() {
  const c = cookies();
  c.set(ACCESS_COOKIE, "", { path: "/", maxAge: 0 });
  c.set(ROLE_COOKIE, "", { path: "/", maxAge: 0 });
}
