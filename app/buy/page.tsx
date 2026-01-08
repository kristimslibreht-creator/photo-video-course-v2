import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function BuyPage() {
  return (
    <>
      <Nav />

      <div className="container">
        <div className="card" style={{ maxWidth: 640, margin: "0 auto" }}>
          <h1 style={{ marginBottom: 12 }}>Оплата доступа к курсу</h1>

          <p className="small" style={{ marginBottom: 16 }}>
            Оплата проходит через <b>Kaspi Pay</b>.  
            После оплаты ты получишь доступ к курсу вручную.
          </p>

          <hr className="sep" />

          <h3 style={{ marginTop: 16 }}>Как оплатить:</h3>
          <ol className="list">
            <li>Нажми кнопку «Оплатить через Kaspi»</li>
            <li>Оплати удобным способом в Kaspi</li>
            <li>Отправь чек в WhatsApp / Telegram / Instagram</li>
            <li>Получи доступ к курсу</li>
          </ol>

          <a
            href="https://pay.kaspi.kz/pay/xntcgaoj"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btnPrimary"
            style={{ display: "block", textAlign: "center", marginTop: 20 }}
          >
            Оплатить через Kaspi
          </a>

          <div className="notice" style={{ marginTop: 16 }}>
            <b>Важно:</b> после оплаты обязательно пришли чек,  
            чтобы я могла выдать доступ.
          </div>

          <div style={{ marginTop: 20 }}>
            <Link href="/course" className="btn btnGhost">
              ← Назад к курсу
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
