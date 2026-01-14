import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function HomePage() {
  const price = "25 000 тг";

  return (
    <>
      <Nav />

      <main className="container">
        {/* HERO */}
        <section className="hero">
          <div>
            <p className="pill">Мини-курс • для телефона • для новичков</p>

            <h1 className="h1">
              Снимай смело: фото и видео с нуля <span className="muted">(на телефон)</span>
            </h1>

            <p className="lead">
              Для тех, кто не понимает свет, композицию и боится камеры.
              Минимум теории — максимум практики. Уже после первого урока ты начнёшь
              снимать увереннее и видеть кадр.
            </p>

            <div className="ctaRow">
              <Link className="btn btnPrimary" href="/buy">
                Купить доступ · {price}
              </Link>

              <Link className="btn btnGhost" href="/course">
                Посмотреть уроки
              </Link>
            </div>

            <div className="badges">
              <span className="badge">✔ Подходит с нуля</span>
              <span className="badge">✔ Без камеры и техники</span>
              <span className="badge">✔ Пошаговые задания</span>
            </div>

            <p className="hint">
              Доступ к урокам — по паролю (приходит после оплаты).
              Если пароль уже есть — нажми “Войти” вверху.
            </p>
          </div>

          {/* right card */}
          <div className="card cardGlass">
            <h3 className="cardTitle">Что будет в курсе</h3>

            <ul className="list">
              <li>
                <b>Урок 1:</b> камера и страх — как начать с нуля (телефон)
              </li>
              <li>
                <b>Урок 2:</b> свет — как сделать красиво без техники
              </li>
              <li>
                <b>Урок 3:</b> композиция — один главный объект
              </li>
            </ul>

            <div className="divider" />

            <div className="miniGrid">
              <div className="mini">
                <div className="miniTitle">Цена</div>
                <div className="miniValue">{price}</div>
              </div>
              <div className="mini">
                <div className="miniTitle">Формат</div>
                <div className="miniValue">уроки + задания</div>
              </div>
              <div className="mini">
                <div className="miniTitle">Уровень</div>
                <div className="miniValue">новичок</div>
              </div>
              <div className="mini">
                <div className="miniTitle">Доступ</div>
                <div className="miniValue">по паролю</div>
              </div>
            </div>

            <div className="cardActions">
              <Link className="btn btnPrimary" href="/buy">
                Купить доступ
              </Link>
              <Link className="btn btnGhost" href="/login?next=%2Fcourse">
                Войти по паролю
              </Link>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="grid2">
          <div className="card">
            <h2 className="h2">Что получится в конце</h2>
            <ul className="list">
              <li>Ты перестанешь бояться “не получится” и начнёшь снимать увереннее.</li>
              <li>Научишься видеть свет и выбирать правильное место для кадра.</li>
              <li>Будешь делать чистые, понятные кадры без лишнего в кадре.</li>
              <li>Поймёшь, как снимать на телефон так, чтобы выглядело “дорого”.</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="h2">Кому подойдёт</h2>
            <ul className="list">
              <li>мамам, блогерам, экспертам — кто хочет красивый контент</li>
              <li>тем, кто снимает “как попало” и хочет систему</li>
              <li>тем, кто давно хотел начать, но страшно</li>
              <li>тем, кто хочет результат без сложной техники</li>
            </ul>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="card how">
          <h2 className="h2">Как ты получаешь доступ</h2>
          <ol className="steps">
            <li>Оплачиваешь курс.</li>
            <li>Получаешь пароль доступа.</li>
            <li>Нажимаешь “Войти” → вводишь пароль → открываются уроки.</li>
          </ol>

          <div className="ctaRow" style={{ marginTop: 12 }}>
            <Link className="btn btnPrimary" href="/buy">
              Купить доступ · {price}
            </Link>
            <Link className="btn btnGhost" href="/course">
              Посмотреть уроки
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* СТИЛИ ТОЛЬКО ДЛЯ ЭТОЙ СТРАНИЦЫ */}
      <style jsx>{`
        .hero {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 18px;
          padding: 28px 0 10px;
          align-items: start;
        }

        @media (max-width: 980px) {
          .hero {
            grid-template-columns: 1fr;
          }
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.85);
          font-size: 13px;
          margin-bottom: 12px;
        }

        .h1 {
          font-size: 44px;
          line-height: 1.08;
          margin: 0 0 12px;
          letter-spacing: -0.02em;
        }

        @media (max-width: 980px) {
          .h1 {
            font-size: 34px;
          }
        }

        .muted {
          color: rgba(255, 255, 255, 0.7);
          font-weight: 600;
        }

        .lead {
          font-size: 16px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.85);
          margin: 0 0 16px;
          max-width: 720px;
        }

        .ctaRow {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin: 12px 0 12px;
        }

        .badges {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        .badge {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.85);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          padding: 8px 10px;
        }

        .hint {
          margin-top: 12px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.65);
        }

        .cardGlass {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          padding: 16px;
          backdrop-filter: blur(10px);
        }

        .cardTitle {
          margin: 0 0 10px;
          font-size: 16px;
        }

        .list {
          margin: 0;
          padding-left: 18px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.55;
        }

        .divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.12);
          margin: 14px 0;
        }

        .miniGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .mini {
          padding: 10px;
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .miniTitle {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 4px;
        }

        .miniValue {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.92);
          font-weight: 700;
        }

        .cardActions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 14px;
        }

        .grid2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 14px;
        }

        @media (max-width: 980px) {
          .grid2 {
            grid-template-columns: 1fr;
          }
        }

        .h2 {
          margin: 0 0 10px;
          font-size: 18px;
        }

        .how {
          margin-top: 14px;
        }

        .steps {
          margin: 0;
          padding-left: 18px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.55;
        }
      `}</style>
    </>
  );
}
