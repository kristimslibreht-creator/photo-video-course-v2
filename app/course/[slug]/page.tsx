import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getLessonBySlug } from "@/lib/course";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = getLessonBySlug(params.slug);
  if (!lesson) return notFound();

  return (
    <>
      <Nav />
      <div className="container">
        <div className="card">
          <Link className="btn" href="/course">← Назад к урокам</Link>
          <h1 style={{ marginTop: 12 }}>{lesson.title}</h1>
          <div className="small">{lesson.duration}</div>
        </div>

        <div className="card" style={{ marginTop: 14, whiteSpace: "pre-wrap" }}>
          {lesson.content}
        </div>
      </div>
      <Footer />
    </>
  );
}
