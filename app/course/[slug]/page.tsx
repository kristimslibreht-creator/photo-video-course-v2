// app/course/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { lessons, type LessonContentBlock } from "@/lib/course";

function Block({ block }: { block: LessonContentBlock }) {
  switch (block.type) {
    case "h1":
      return <h1 style={{ margin: "6px 0 10px" }}>{block.text}</h1>;

    case "h2":
      return <h2 style={{ margin: "18px 0 8px" }}>{block.text}</h2>;

    case "p":
      return (
        <p className="small" style={{ margin: "8px 0", lineHeight: 1.6 }}>
          {block.text}
        </p>
      );

    case "list":
      return (
        <ul className="list" style={{ margin: "10px 0 14px" }}>
          {block.items.map((it, idx) => (
            <li key={idx} style={{ marginBottom: 8 }}>
              {it}
            </li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <div className="card" style={{ margin: "12px 0", borderLeft: "4px solid rgba(255,255,255,0.2)" }}>
          {block.title ? <h3 style={{ margin: "0 0 6px" }}>{block.title}</h3> : null}
          <p className="small" style={{ margin: 0, lineHeight: 1.6 }}>
            {block.text}
          </p>
        </div>
      );

    case "divider":
      return <hr className="sep" style={{ margin: "18px 0" }} />;

    default:
      return null;
  }
}

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = lessons.find((l) => l.slug === params.slug);
  if (!lesson) return notFound();

  const hasContent = Array.isArray(lesson.content) && lesson.content.length > 0;
  const hasVideo = !!lesson.videoEmbedUrl;

  return (
    <>
      <Nav />

      <div className="container">
        <div className="grid2">
          {/* Левая колонка: статья/видео/текст */}
          <div className="card">
            <div className="small">
              <Link href="/course">← назад к урокам</Link>
            </div>

            <h2 style={{ margin: "10px 0 6px" }}>{lesson.title}</h2>
            <div className="small">Длительность: {lesson.duration}</div>

            <hr className="sep" />

            {/* Если есть статья-контент — показываем его */}
            {hasContent ? (
              <div>
                {lesson.content!.map((b, i) => (
                  <Block key={i} block={b} />
                ))}
              </div>
            ) : (
              <div>
                {/* Иначе показываем видео/summary как раньше */}
                {hasVideo ? (
                  <div className="videoWrap">
                    <iframe
                      src={lesson.videoEmbedUrl}
                      title={lesson.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : null}

                {lesson.summary ? (
                  <p className="small" style={{ lineHeight: 1.6 }}>
                    {lesson.summary}
                  </p>
                ) : null}
              </div>
            )}
          </div>

          {/* Правая колонка: домашка */}
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Домашнее задание</h3>

            {lesson.tasks && lesson.tasks.length ? (
              <ol className="list">
                {lesson.tasks.map((t, i) => (
                  <li key={i} style={{ marginBottom: 10 }}>
                    {t}
                  </li>
                ))}
              </ol>
            ) : (
              <p className="small">Домашнего задания пока нет.</p>
            )}

            <hr className="sep" />

            <p className="small" style={{ margin: 0, opacity: 0.9 }}>
              Подсказка: отправляй ученикам доступ после оплаты, а домашку собирай в одном месте — позже автоматизируем.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
