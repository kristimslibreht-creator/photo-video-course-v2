"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isPasswordValid } from "../../lib/auth";

export async function login(formData: FormData) {
  const password = String(formData.get("password") || "");
  const next = String(formData.get("next") || "/course");

  if (!isPasswordValid(password)) {
    return { ok: false as const, message: "Неверный пароль" };
  }

  cookies().set("course_auth", "1", {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  redirect(next);
}

export async function logout() {
  cookies().set("course_auth", "0", {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    maxAge: 0,
  });
  redirect("/");
}
