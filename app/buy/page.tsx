import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const PRICE = "25 000 ₸";
const PAY_LINK = "https://pay.kaspi.kz/pay/xntcgaoj";

export default function BuyPage() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="card">
          <h1 style={{ marginTop: 0 }}>Купить доступ</h1>
          <p className="small">
            Стоимость курса: <b>{PRICE}</b>
          </p>

          <a className="btn btnPrimary" href={PAY_LINK} target="_blank" rel="noreferrer">
            Оплатить через Kaspi
          </a>

          <div className="notice" style={{ marginTop: 12 }}>
            <b>После оплаты</b> ты получаешь пароль доступа и входишь на страницу “Войти”.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
