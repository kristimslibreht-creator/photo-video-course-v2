import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { login } from "./actions";

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { next?: string; error?: string };
}) {
  const next = searchParams?.next || "/course";
  const error = searchParams?.error;

  return (
    <>
      <Nav />
      <div className="container">
        <div className="card" style={{ maxWidth: 560, margin: "24px auto" }}>
          <h2 style={{ marginTop: 0 }}>Вход в курс</h2>
          <p className="small">Введи пароль доступа (приходит после оплаты).</p>

          <form action={login} className="grid" style={{ display: "grid", gap: 10 }}>
            <input type="hidden" name="next" value={next} />
            <input className="input" name="password" type="password" placeholder="Пароль" />
            <button className="btn btnPrimary" type="submit">Войти</button>
          </form>

          <div className="small" style={{ marginTop: 10 }}>
            Если ты ещё не покупала доступ — перейди на страницу <a href="/buy">«Купить»</a>.
          </div>

          {error && (
            <div className="notice" style={{ marginTop: 12 }}>
              <b>Ошибка:</b>{" "}
              {error === "wrong"
                ? "Неверный пароль. Проверь язык/пробелы."
                : "Введи пароль."}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
