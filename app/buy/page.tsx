import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function BuyPage() {
  return (
    <>
      <Nav />

      <div className="container">
        <div className="card" style={{ maxWidth: 640, margin: "0 auto" }}>
          <h1 style={{ marginBottom: 8 }}>Курс «Фото и видео с нуля»</h1>

          <div className="small" style={{ marginBottom: 16 }}>
            Полный старт для тех, кто хочет снимать красиво и уверенно
          </div>

          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            Стоимость: 25 000 ₸
          </div>

          <hr className="sep" />

          <h3 style={{ marginTop: 16 }}>Как проходит оплата</h3>
          <ol className="list">
            <li>Нажми кнопку «Оплатить через Kaspi»</li>
            <li>Оплати удобным способом в Kaspi</li>
            <li>Отправь чек в WhatsApp / Telegram / Instagram</li>
            <li>Я выдам тебе доступ к курсу</li>
          </ol>

          <a
            href="https://pay.kaspi.kz/pay/xntcgaoj"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btnPrimary"
            style={{
              display: "block",
              textAlign: "center",
              marginTop: 20,
              fontSize: 18,
            }}
          >
            Оплатить 25 000 ₸ через Kaspi
          </a>

          <div className="notice" style={{ marginTop: 16 }}>
            <b>Важно:</b> после оплаты обязательно пришли чек,
            чтобы я могла подтвердить платёж и открыть доступ.
          </div>

          <div style={{ marginTop: 20 }}>
            <Link href="/course" className="btn btnGhost">
              ← Назад к описанию курса
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
