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
        <div className="card" style={{ maxWidth: 520, margin: "24px auto" }}>
          <h2 style={{ marginTop: 0 }}>Вход в курс</h2>
          <p className="small">
            Введи пароль доступа (приходит после оплаты).
          </p>

          {/* ВАЖНО: action={login} */}
          <form action={login} style={{ display: "grid", gap: 12 }}>
            <input type="hidden" name="next" value={next} />

            <input
              className="input"
              type="password"
              name="password"
              placeholder="Пароль"
              required
            />

            <button type="submit" className="btn btnPrimary">
              Войти
            </button>
          </form>

          <div className="small" style={{ marginTop: 12 }}>
            Если ты ещё не покупала доступ — перейди на страницу{" "}
            <a href="/buy">«Купить»</a>.
          </div>

          {error && (
            <div className="notice" style={{ marginTop: 12 }}>
              <b>Ошибка:</b>{" "}
              {error === "wrong"
                ? "Неверный пароль. Проверь язык и пробелы."
                : "Введи пароль."}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
