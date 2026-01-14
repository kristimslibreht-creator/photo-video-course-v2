import Link from "next/link";
import { lessons } from "@/lib/course";
import { notFound } from "next/navigation";

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = lessons.find((l) => l.slug === params.slug);
  if (!lesson) return notFound();

  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 26, marginBottom: 6 }}>{lesson.title}</h1>
      <div style={{ opacity: 0.8, marginBottom: 16 }}>{lesson.duration}</div>

      <div style={card}>
        <pre style={{ whiteSpace: "pre-wrap", margin: 0, fontFamily: "inherit", lineHeight: 1.5 }}>
          {lesson.content}
        </pre>
      </div>

      <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link href="/course" style={btn}>← К списку уроков</Link>
        <Link href="/" style={btn}>На главную</Link>
      </div>
    </main>
  );
}

const card: React.CSSProperties = {
  padding: 14,
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.15)",
};

const btn: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.2)",
  textDecoration: "none",
};
