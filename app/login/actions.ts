"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const password = String(formData.get("password") ?? "").trim();
  const next = String(formData.get("next") ?? "/course");

  const coursePass = (process.env.COURSE_PASSWORD ?? "").trim();
  const adminPass = (process.env.ADMIN_PASSWORD ?? "").trim();

  // ✅ если админ — сразу пускаем
  if (password === adminPass) {
    cookies().set("course_access", "admin", {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: true,
    });
    redirect(next);
  }

  // ✅ если ученик
  if (password === coursePass) {
    cookies().set("course_access", "user", {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: true,
    });
    redirect(next);
  }

  // ❌ неверный пароль
  redirect(`/login?next=${encodeURIComponent(next)}&error=1`);
}
