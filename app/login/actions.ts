// app/login/actions.ts
"use server";

import { setAdminAccess, setCourseAccess, clearAccess } from "@/lib/auth";

export type LoginResult =
  | { ok: true; role: "admin" | "student" }
  | { ok: false; message: string };

function normalize(s: string) {
  return (s || "").trim();
}

export async function login(formData: FormData): Promise<LoginResult> {
  const password = normalize(String(formData.get("password") || ""));

  const coursePass = normalize(process.env.COURSE_PASSWORD || "");
  const adminPass = normalize(process.env.ADMIN_PASSWORD || "");

  // если переменные не настроены — покажем понятную ошибку
  if (!coursePass && !adminPass) {
    return { ok: false, message: "Пароль не настроен на сервере (Vercel env)." };
  }

  // админ
  if (adminPass && password === adminPass) {
    setAdminAccess();
    return { ok: true, role: "admin" };
  }

  // ученик
  if (coursePass && password === coursePass) {
    setCourseAccess();
    return { ok: true, role: "student" };
  }

  return { ok: false, message: "Неверный пароль. Проверь раскладку/пробелы." };
}

export async function logout() {
  clearAccess();
  return { ok: true as const };
}
