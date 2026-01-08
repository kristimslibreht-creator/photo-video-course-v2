import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "../../../components/Nav";
import { Footer } from "../../../components/Footer";
import { lessons } from "../../../lib/course";

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
              <Link href="/course"><u>← назад к урокам</u></Link>
            </div>
            <h2 style={{margin:"10px 0 6px"}}>{lesson.title}</h2>
            <div className="small">Длительность: {lesson.duration}</div>

            <hr className="sep" />

            <div className="videoWrap">
              <iframe
                src={lesson.videoEmbedUrl}
                title={lesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="small" style={{marginTop:12}}>
              Если ты используешь YouTube unlisted/Vimeo — просто вставь сюда embed-ссылку.
              Файл: <code>lib/course.ts</code>
            </p>
          </div>

          <div className="card">
            <h3 className="sectionTitle">Коротко про урок</h3>
            <div className="notice">{lesson.summary}</div>

            <hr className="sep" />

            <h3 className="sectionTitle">Задания</h3>
            <ol className="list">
              {lesson.tasks.map((t, i) => (
                <li key={i} style={{marginBottom:8}}>{t}</li>
              ))}
            </ol>

            <hr className="sep" />

            <div className="notice noticeOk">
              <b>Как понять, что ты сделала правильно:</b>
              <div className="small" style={{marginTop:6}}>
                В кадре есть один главный объект, свет приятный, фон не мешает, и тебе нравится смотреть на результат.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
