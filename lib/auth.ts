export function isPasswordValid(pw: string) {
  const expected = process.env.COURSE_PASSWORD;
  if (!expected) return pw.length > 0; // fallback for local dev
  return pw === expected;
}
