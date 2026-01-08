import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { login } from "./actions";

export default function LoginPage({ searchParams }: { searchParams?: { next?: string } }) {
  const next = searchParams?.next || "/course";

  return (
    <>
      <Nav />
      <div className="container">
        <div className="card" style={{maxWidth:520, margin:"24px auto"}}>
          <h2 style={{marginTop:0}}>Вход в курс</h2>
          <p className="small">Введите пароль доступа (приходит после оплаты).</p>

          <form action={login} className="grid" style={{marginTop:12}}>
            <input type="hidden" name="next" value={next} />
            <input className="input" name="password" placeholder="Пароль" />
            <button className="btn btnPrimary" type="submit">Войти</button>
            <p className="small">
              Если ты ещё не покупала доступ — перейди на страницу <a href="/buy"><u>Купить</u></a>.
            </p>
          </form>

          {/* Ошибка показывается на сервере как возвращаемое значение, но в MVP не делаем сложный UX */}
          <div className="notice" style={{marginTop:12}}>
            <b>Если не пускает:</b>
            <div className="small" style={{marginTop:6}}>
              Проверь пробелы в конце, раскладку и регистр букв.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
