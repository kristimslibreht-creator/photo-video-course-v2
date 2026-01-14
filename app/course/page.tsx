import Link from "next/link";
import { COURSE_TITLE, lessons } from "@/lib/course";

export default function CourseIndex() {
  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>{COURSE_TITLE}</h1>
      <p style={{ opacity: 0.8, marginBottom: 16 }}>Выбери урок и открой.</p>

      <div style={{ display: "grid", gap: 12 }}>
        {lessons.map((l) => (
          <div key={l.slug} style={card}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <h3 style={{ margin: 0 }}>{l.title}</h3>
              <div style={{ opacity: 0.8 }}>{l.duration}</div>
            </div>
            <div style={{ opacity: 0.85, marginTop: 8 }}>{l.summary}</div>

            <div style={{ marginTop: 12 }}>
              <Link href={`/course/${l.slug}`} style={btnPrimary}>
                Открыть урок →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 18 }}>
        <Link href="/" style={btn}>← На главную</Link>
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

const btnPrimary: React.CSSProperties = {
  ...btn,
  background: "linear-gradient(90deg,#3b82f6,#22c55e)",
  color: "white",
  border: "1px solid rgba(0,0,0,0.2)",
};
