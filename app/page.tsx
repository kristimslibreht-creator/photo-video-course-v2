import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { COURSE_TITLE, lessons } from "@/lib/course";

export default function HomePage() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="grid2" style={{ alignItems: "start" }}>
          <div className="card">
            <h1 style={{ marginTop: 0 }}>{COURSE_TITLE}</h1>
            <p className="small">
              Для тех, кто не умеет ничего: свет, композиция, движения камеры и первые красивые кадры.
              Минимум теории — максимум практики.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
              <Link className="btn btnPrimary" href="/buy">Купить доступ</Link>
              <Link className="btn" href="/course">Посмотреть уроки</Link>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
              <span className="notice">✅ Уровень: новичок</span>
              <span className="notice">🎥 Видео + задания</span>
              <span className="notice">⭐ {lessons.length} урока в старте</span>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Программа (старт)</h3>
            <div style={{ display: "grid", gap: 10 }}>
              {lessons.map((l) => (
                <div key={l.slug} className="notice">
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <b>{l.title}</b>
                    <span className="small">{l.duration}</span>
                  </div>
                  <div className="small" style={{ marginTop: 6 }}>{l.summary}</div>
                </div>
              ))}
            </div>

            <div className="small" style={{ marginTop: 12 }}>
              Доступ после оплаты: пароль → вход → уроки.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
