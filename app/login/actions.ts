"use server";

import { redirect } from "next/navigation";
import { setAccessCookie } from "@/lib/auth";

export async function login(formData: FormData) {
  const password = String(formData.get("password") || "").trim();
  const next = String(formData.get("next") || "/course");

  const coursePass = process.env.COURSE_PASSWORD || "";
  const adminPass = process.env.ADMIN_PASSWORD || "";

  if (!password) {
    redirect(`/login?next=${encodeURIComponent(next)}&error=empty`);
  }

  if (adminPass && password === adminPass) {
    setAccessCookie("admin");
    redirect(next);
  }

  if (coursePass && password === coursePass) {
    setAccessCookie("student");
    redirect(next);
  }

  redirect(`/login?next=${encodeURIComponent(next)}&error=wrong`);
}
