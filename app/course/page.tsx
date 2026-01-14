import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { lessons, COURSE_TITLE } from "@/lib/course";

export default function CoursePage() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="card">
          <h1 style={{ marginTop: 0 }}>{COURSE_TITLE}</h1>
          <div className="small">Выбери урок и проходи обучение по шагам.</div>
        </div>

        <div className="grid2" style={{ marginTop: 14 }}>
          {lessons.map((l) => (
            <div key={l.slug} className="card">
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <h3 style={{ margin: 0 }}>{l.title}</h3>
                <div className="small">{l.duration}</div>
              </div>

              <div className="small" style={{ marginTop: 10 }}>{l.summary}</div>

              <div style={{ marginTop: 12 }}>
                <Link className="btn btnPrimary" href={`/course/${l.slug}`}>
                  Открыть урок →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
