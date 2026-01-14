import Link from "next/link";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";

const PRICE = "15 000 ₸";
const KASPI_PAY_URL = "https://pay.kaspi.kz/pay/xntcgaoj";

export default function BuyPage() {
  return (
    <>
      <Nav />

      <div className="container">
        <div className="grid2">
          {/* ЛЕВО: текст + кнопка */}
          <div className="card">
            <div className="small">
              <Link href="/">← назад на главную</Link>
            </div>

            <h1 style={{ margin: "10px 0 6px" }}>
              «Кадр за кадром: Фото + Видео с нуля»
            </h1>

            <div className="small" style={{ marginBottom: 12 }}>
              Стоимость доступа: <b>{PRICE}</b>
            </div>

            <div className="notice" style={{ marginBottom: 14 }}>
              Оплата через Kaspi Pay по ссылке — быстро и удобно 👇
            </div>

            <a
              className="btn btnPrimary"
              href={KASPI_PAY_URL}
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-block", textAlign: "center" }}
            >
              Оплатить {PRICE} через Kaspi Pay
            </a>

            <hr className="sep" />

            <h3 className="sectionTitle">Что делать после оплаты</h3>
            <ol className="list">
              <li>Нажми кнопку оплаты и заверши перевод.</li>
              <li>
                Сразу после оплаты напиши мне в <b>WhatsApp/Instagram</b> и
                отправь скрин чека.
              </li>
              <li>Я пришлю пароль и доступ к урокам 🤍</li>
            </ol>

            <div className="small" style={{ marginTop: 10, opacity: 0.85 }}>
              Если возникли вопросы по оплате — просто напиши мне, помогу.
            </div>
          </div>

          {/* ПРАВО: “карточка” с ценой и подсказками */}
          <div className="card">
            <h3 className="sectionTitle">Оплата</h3>

            <div className="notice">
              <div className="small">Цена курса</div>
              <div style={{ fontSize: 28, fontWeight: 800, marginTop: 6 }}>
                {PRICE}
              </div>
            </div>

            <div className="small" style={{ marginTop: 12 }}>
              <b>Kaspi Pay:</b> по ссылке (откроется в новом окне).
            </div>

            <div className="small" style={{ marginTop: 10 }}>
              После оплаты обязательно напиши мне, чтобы я выдала доступ.
            </div>

            <hr className="sep" />

            <div className="small">
              Хочешь вместо ссылки добавить QR-код?
              <br />
              Скажи — подскажу, куда вставить картинку.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
