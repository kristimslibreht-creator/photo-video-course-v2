// app/course/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { getLessonBySlug, lessonContent } from "@/lib/course";

type Props = {
  params: { slug: string };
};

export default function LessonPage({ params }: Props) {
  const lesson = getLessonBySlug(params.slug);
  if (!lesson) return notFound();

  const content = lessonContent[lesson.slug];
  if (!content) return notFound();

  return (
    <>
      <Nav />

      <div className="container">
        <div className="card" style={{ marginTop: 24 }}>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div
              style={{
                width: 140,
                height: 100,
                borderRadius: 14,
                overflow: "hidden",
                background: "rgba(255,255,255,0.06)",
                flex: "0 0 auto",
              }}
            >
              <Image
                src={lesson.cover}
                alt={lesson.title}
                width={280}
                height={200}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <h1 style={{ marginTop: 0 }}>{lesson.title}</h1>
              <div className="small">{content?.intro?.subtitle}</div>

              <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <span className="pill">⏱ {lesson.duration}</span>
                <span className="pill">📱 Телефон</span>
                <span className="pill">🎬 Спокойное видео</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            <Link className="btn" href="/course">
              ← Назад к урокам
            </Link>
          </div>
        </div>

        <div className="card" style={{ marginTop: 12 }}>
          {content.blocks.map((b: any, idx: number) => {
            if (b.type === "h2") return <h2 key={idx}>{b.text}</h2>;
            if (b.type === "p") return <p key={idx}>{b.text}</p>;

            if (b.type === "list")
              return (
                <div key={idx} style={{ marginTop: 12 }}>
                  {b.title ? <h3 style={{ marginBottom: 8 }}>{b.title}</h3> : null}
                  <ul style={{ marginTop: 0 }}>
                    {b.items.map((it: string, i: number) => (
                      <li key={i} style={{ marginBottom: 6 }}>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              );

            if (b.type === "callout")
              return (
                <div
                  key={idx}
                  className="notice"
                  style={{
                    marginTop: 12,
                    padding: 14,
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(255,255,255,0.06)",
                  }}
                >
                  <div style={{ fontWeight: 700 }}>{b.title}</div>
                  <div className="small" style={{ marginTop: 6 }}>
                    {b.text}
                  </div>
                </div>
              );

            return null;
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}
