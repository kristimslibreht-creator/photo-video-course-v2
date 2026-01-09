"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function clean(s: string) {
  return (s ?? "").trim();
}

export async function login(formData: FormData) {
  const password = clean(String(formData.get("password") ?? ""));
  const next = clean(String(formData.get("next") ?? "/course"));

  const coursePass = clean(process.env.COURSE_PASSWORD ?? "");
  const adminPass = clean(process.env.ADMIN_PASSWORD ?? "");

  const ok =
    (coursePass && password === coursePass) ||
    (adminPass && password === adminPass);

  if (!ok) {
    // показываем ошибку через query
    redirect(`/login?next=${encodeURIComponent(next)}&error=1`);
  }

  cookies().set("course_access", "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 дней
  });

  redirect(next || "/course");
}

export async function logout() {
  cookies().set("course_access", "0", {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 0,
  });
  redirect("/");
}
