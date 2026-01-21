import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function HomePage() {
  const price = "25 000 тг";

  return (
    <>
      <Nav />

      <main className="container" style={{ paddingTop: 28, paddingBottom: 28 }}>
        {/* HERO */}
        <section className="card" style={{ padding: 18 }}>
          <h1 style={{ fontSize: 36, margin: "0 0 10px" }}>
            Снимай смело: фото и видео с нуля (на телефон)
          </h1>

          <p className="small" style={{ marginTop: 0, maxWidth: 820 }}>
            Для тех, кто не понимает свет, композицию и боится камеры.
            Минимум теории — максимум практики. Я покажу простыми словами,
            как начать с нуля и получить красивые кадры на телефон.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
            <Link className="btn btnPrimary" href="/buy">
              Купить доступ · {price}
            </Link>
            <Link className="btn" href="/course">
              Посмотреть уроки
            </Link>
            <Link className="btn" href="/login?next=%2Fcourse">
              Войти по паролю
            </Link>
          </div>

          <div className="small" style={{ marginTop: 10, opacity: 0.8 }}>
            Доступ к урокам — по паролю (приходит после оплаты).
          </div>
        </section>

        {/* PROGRAM */}
        <section className="grid2" style={{ marginTop: 14 }}>
          <div className="card" style={{ padding: 18 }}>
            <h2 style={{ marginTop: 0 }}>Программа (старт)</h2>

            <div style={{ marginTop: 12 }}>
              <b>Урок 1 — Камера и страх: как начать с нуля (телефон)</b>
              <div className="small" style={{ opacity: 0.9, marginTop: 6 }}>
                Знакомимся с камерой телефона, убираем страх «у меня не получится».
                Учимся делать первые кадры без оценки.
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
              <b>Урок 2 — Свет: как сделать красиво без техники</b>
              <div className="small" style={{ opacity: 0.9, marginTop: 6 }}>
                Учимся видеть мягкий и жёсткий свет. Выбираем место у окна,
                избегаем контрового света.
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
              <b>Урок 3 — Композиция: один главный объект</b>
              <div className="small" style={{ opacity: 0.9, marginTop: 6 }}>
                Правило одного объекта, чистый фон, кадрирование и почему
                «лишнее» убивает красоту.
              </div>
            </div>
          </div>

          {/* PRICE + HOW */}
          <div className="card" style={{ padding: 18 }}>
            <h2 style={{ marginTop: 0 }}>Стоимость</h2>
            <div style={{ fontSize: 26, fontWeight: 800, marginTop: 6 }}>{price}</div>

            <div className="small" style={{ marginTop: 10, opacity: 0.9 }}>
              Оплата: Kaspi Pay (самый удобный вариант)
            </div>

            <div className="small" style={{ marginTop: 8 }}>
              После оплаты ты получаешь пароль и заходишь в уроки через кнопку “Войти”.
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
              <Link className="btn btnPrimary" href="/buy">
                Купить доступ
              </Link>
              <Link className="btn" href="/course">
                Посмотреть уроки
              </Link>
            </div>

            <div style={{ marginTop: 16 }}>
              <h3 style={{ margin: "0 0 8px" }}>Как ты получаешь доступ</h3>
              <ol className="small" style={{ marginTop: 0, paddingLeft: 18, opacity: 0.9 }}>
                <li>Оплачиваешь курс</li>
                <li>Получаешь пароль доступа</li>
                <li>Нажимаешь “Войти” → вводишь пароль → открываются уроки</li>
              </ol>
            </div>
          </div>
        </section>

        {/* RESULTS + WHO */}
        <section className="grid2" style={{ marginTop: 14 }}>
          <div className="card" style={{ padding: 18 }}>
            <h2 style={{ marginTop: 0 }}>Что получится в конце</h2>
            <ul className="small" style={{ marginTop: 10, paddingLeft: 18, opacity: 0.9 }}>
              <li>Перестанешь бояться камеры и начнёшь снимать увереннее</li>
              <li>Поймёшь, как выбирать свет и место для кадра</li>
              <li>Начнёшь делать “чистые” кадры без хаоса</li>
              <li>Сможешь снимать на телефон красиво и понятно</li>
            </ul>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <h2 style={{ marginTop: 0 }}>Кому подойдёт</h2>
            <ul className="small" style={{ marginTop: 10, paddingLeft: 18, opacity: 0.9 }}>
              <li>Мамам, блогерам, экспертам — кто хочет красивый контент</li>
              <li>Тем, кто снимает “как попало” и хочет систему</li>
              <li>Тем, кто хочет начать, но страшно</li>
              <li>Тем, кто хочет результат без техники и сложных настроек</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
