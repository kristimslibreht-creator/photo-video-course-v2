import Link from "next/link";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { lessons, COURSE_TITLE } from "../../lib/course";

export default function CoursePage() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="card">
          <h1 style={{ margin: "0 0 6px" }}>{COURSE_TITLE}</h1>
          <div className="small">Выбери урок и проходи по шагам.</div>
        </div>

        <div className="grid2" style={{ marginTop: 12 }}>
          {lessons.map((l) => (
            <div key={l.slug} className="card">
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <h3 style={{ margin: 0 }}>{l.title}</h3>
                <div className="small">{l.duration}</div>
              </div>

              <div className="small" style={{ marginTop: 8 }}>
                {l.summary}
              </div>

              <div style={{ marginTop: 12 }}>
                <Link className="btn btnPrimary" href={`/course/${l.slug}`}>
                  Открыть урок →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: 12 }}>
          <div className="small">
            Если у тебя нет доступа — перейди на страницу <Link href="/buy">«Купить»</Link>.
            Если доступ есть — <Link href="/login?next=%2Fcourse">введи пароль</Link>.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
