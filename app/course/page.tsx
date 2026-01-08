import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { lessons, COURSE_TITLE } from "@/lib/course";
import { logout } from "@/app/login/actions";

export default function CourseIndex() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="card">
          <div style={{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",alignItems:"center"}}>
            <div>
              <h2 style={{margin:"0 0 6px"}}>Закрытый раздел: {COURSE_TITLE}</h2>
              <div className="small">Выбери урок и выполняй задания. Делай всё медленно — это нормально 🙂</div>
            </div>

            <form action={logout}>
              <button className="btn btnDanger" type="submit">Выйти</button>
            </form>
          </div>

          <hr className="sep" />

          <div className="grid">
            {lessons.map((l, idx) => (
              <Link key={l.slug} href={`/course/${l.slug}`} className="notice">
                <div style={{display:"flex",justifyContent:"space-between",gap:10}}>
                  <b>{idx + 1}. {l.title}</b>
                  <span className="small">{l.duration}</span>
                </div>
                <div className="small" style={{marginTop:6}}>{l.summary}</div>
              </Link>
            ))}
          </div>

          <hr className="sep" />

          <div className="notice noticeOk">
            <b>Совет:</b>
            <div className="small" style={{marginTop:6}}>
              Снимай задания и складывай в папку “Курс”. Через неделю ты увидишь сильный прогресс.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
