"use client";

import { useFormState } from "react-dom";
import { login } from "./actions";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";

const initialState: { error?: string } = {};

export default function LoginPage({ searchParams }: { searchParams?: { next?: string } }) {
  const next = searchParams?.next || "/course";
  const [state, formAction] = useFormState(login, initialState);

  return (
    <>
      <Nav />

      <div className="container">
        <div className="card" style={{ maxWidth: 520, margin: "24px auto" }}>
          <h2 style={{ marginTop: 0 }}>Вход в курс</h2>
          <p className="small">Введи пароль доступа (приходит после оплаты).</p>

          <form action={formAction} className="grid" style={{ marginTop: 12 }}>
            <input type="hidden" name="next" value={next} />
            <input className="input" name="password" type="password" placeholder="Пароль" required />
            <button className="btn btnPrimary" type="submit">Войти</button>

            <p className="small">
              Если ты ещё не покупала доступ — перейди на страницу <a href="/buy">«Купить»</a>.
            </p>

            {state?.error ? (
              <div className="notice" style={{ marginTop: 12 }}>
                <b>Ошибка:</b> <div className="small" style={{ marginTop: 6 }}>{state.error}</div>
              </div>
            ) : null}
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
