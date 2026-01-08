import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function BuyPage() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="grid2">
          <div className="card">
            <h2 style={{marginTop:0}}>Оплата и доступ</h2>
            <p className="small">
              В этом MVP варианте ты можешь принимать оплату через Kaspi/перевод и выдавать пароль вручную.
              Это идеальный старт, чтобы быстро запустить продажи и собрать отзывы.
            </p>

            <hr className="sep" />

            <h3 className="sectionTitle">Шаг 1 — Оплата</h3>
            <ol className="list">
              <li>Оплати курс удобным способом (Kaspi QR / перевод / реквизиты).</li>
              <li>Сделай скрин оплаты.</li>
              <li>Отправь скрин в Instagram/Telegram (куда тебе удобно).</li>
            </ol>

            <h3 className="sectionTitle" style={{marginTop:14}}>Шаг 2 — Получи пароль</h3>
            <p className="small">Я отправлю пароль доступа в ответ. Затем:</p>
            <div className="btnRow">
              <Link className="btn btnPrimary" href="/login">Перейти к входу</Link>
              <Link className="btn" href="/">Назад на главную</Link>
            </div>

            <div className="notice" style={{marginTop:14}}>
              <b>Где вставить Kaspi QR?</b>
              <div className="small" style={{marginTop:6}}>
                Открой файл <code>app/buy/page.tsx</code> и замени блок справа на свой QR (картинка) и текст.
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="sectionTitle">Kaspi QR (пример-место)</h3>
            <div className="notice">
              <div className="small">
                Тут должен быть твой QR и/или ссылка на оплату. Сейчас стоит заглушка.
              </div>
              <div style={{
                marginTop:12,
                border:"1px dashed var(--line)",
                borderRadius:16,
                padding:18,
                textAlign:"center",
                color:"var(--muted)"
              }}>
                [ ВСТАВЬ КАРТИНКУ QR ]
              </div>
              <div className="small" style={{marginTop:12}}>
                Текст под QR: «Оплата: Kaspi Gold • +7 xxx xxx xx xx • Получатель: …»
              </div>
            </div>

            <hr className="sep" />

            <div className="notice noticeOk">
              <b>Подсказка по цене:</b>
              <div className="small" style={{marginTop:6}}>
                Стартовая цена часто работает лучше в формате “первый поток/первые 20 мест”.
                Потом можно поднять.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
