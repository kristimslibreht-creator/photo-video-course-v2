import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { COURSE_TITLE, lessons } from "@/lib/course";

export default function HomePage() {
  return (
    <>
      <Nav />

      <div className="container">
        <div className="hero">
          <div>
            <h1 className="h1">{COURSE_TITLE}</h1>
            <p className="lead">
              Для тех, кто <b>не умеет ничего</b>: свет, композиция, движения камеры и первые красивые кадры.
              Минимум теории — максимум практики.
            </p>

            <div className="btnRow">
              <Link className="btn btnPrimary" href="/buy">Купить доступ</Link>
              <Link className="btn" href="/course">Посмотреть уроки</Link>
            </div>

            <div className="kpi">
              <span className="chip">✅ Уровень: новичок</span>
              <span className="chip">🎥 Видео + задания</span>
              <span className="chip">🧩 {lessons.length} урока в старте</span>
              <span className="chip">📱 Подходит для телефона</span>
            </div>

            <hr className="sep" />

            <div className="grid2">
              <div className="card">
                <h3 className="sectionTitle">Что получится в конце</h3>
                <ul className="list">
                  <li>Ты перестанешь бояться камеры и начнёшь снимать уверенно.</li>
                  <li>Научишься видеть свет и выбирать лучшие места для съёмки.</li>
                  <li>Поймёшь композицию и будешь делать «чистый» кадр.</li>
                  <li>Снимешь мини-проект и получишь основу для портфолио.</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="sectionTitle">Кому подойдёт</h3>
                <ul className="list">
                  <li>Мамам, блогерам, экспертам — кто хочет красивый контент.</li>
                  <li>Тем, кто снимает «как попало» и хочет систему.</li>
                  <li>Тем, кто хочет начать зарабатывать съёмкой.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="sectionTitle">Программа (старт)</h3>
            <div className="grid" style={{marginTop:10}}>
              {lessons.map((l) => (
                <div key={l.slug} className="notice">
                  <div style={{display:"flex",justifyContent:"space-between",gap:10}}>
                    <b>{l.title}</b>
                    <span className="small">{l.duration}</span>
                  </div>
                  <div className="small" style={{marginTop:6}}>{l.summary}</div>
                </div>
              ))}
            </div>

            <hr className="sep" />

            <div className="notice noticeOk">
              <b>Как ты получаешь доступ:</b>
              <div className="small" style={{marginTop:6}}>
                Оплачиваешь → получаешь пароль → заходишь на страницу “Войти” → открываются уроки.
              </div>
            </div>

            <div style={{marginTop:12}} className="btnRow">
              <Link className="btn btnPrimary" href="/buy">Купить</Link>
              <Link className="btn" href="/login">Войти</Link>
            </div>

            <div className="small" style={{marginTop:10}}>
              *На старте пароль выдаётся вручную (быстро). Позже можно сделать автодоступ после оплаты.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
