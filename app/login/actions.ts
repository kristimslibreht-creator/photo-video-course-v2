"use server";

import { redirect } from "next/navigation";
import { setAdminAccess, setCourseAccess } from "@/lib/auth";

type State = { error?: string };

function normalize(s: string) {
  return (s || "").trim();
}

export async function login(prevState: State, formData: FormData): Promise<State> {
  const password = normalize(String(formData.get("password") || ""));
  const next = normalize(String(formData.get("next") || "/course"));

  const coursePass = normalize(process.env.COURSE_PASSWORD || "");
  const adminPass = normalize(process.env.ADMIN_PASSWORD || "");

  if (!coursePass && !adminPass) {
    return { error: "Пароли не настроены на Vercel (Environment Variables)." };
  }

  if (adminPass && password === adminPass) {
    setAdminAccess();
    redirect(next);
  }

  if (coursePass && password === coursePass) {
    setCourseAccess();
    redirect(next);
  }

  return { error: "Неверный пароль. Проверь язык/пробелы." };
}
