import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { lessons } from "../../lib/course";

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = lessons.find((l) => l.slug === params.slug);
  if (!lesson) return notFound();

  return (
    <>
      <Nav />

      <div className="container">
        <div className="grid2">
          <div className="card">
            <div className="small">
              <Link href="/course">← назад к урокам</Link>
            </div>

            <h2 style={{ margin: "10px 0 6px" }}>{lesson.title}</h2>
            <div className="small">Длительность: {lesson.duration}</div>

            <hr className="sep" />

            {/* Вариант 2: текстовый урок */}
            <div className="section">
              {lesson.content?.map((p, i) => (
                <p key={i} className="small" style={{ lineHeight: 1.6 }}>
                  {p}
                </p>
              ))}
            </div>

            {!!lesson.homework?.length && (
              <>
                <hr className="sep" />
                <h3 className="sectionTitle">Домашнее задание</h3>
                <ol className="list">
                  {lesson.homework.map((t, i) => (
                    <li key={i} style={{ marginBottom: 8 }}>
                      {t}
                    </li>
                  ))}
                </ol>
              </>
            )}
          </div>

          <div className="card">
            <h3 className="sectionTitle">Подсказка</h3>
            <div className="small">
              После урока сделай задания и сохрани результат. Позже добавим удобную отправку ДЗ.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
