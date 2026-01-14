import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Nav />

      <div className="container">
        <div className="hero">
          <h1>Снимай смело: фото и видео с нуля (на телефон)</h1>
          <p>
            Для тех, кто не понимает свет, композицию и боится камеры.
            Минимум теории — максимум практики.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            <Link href="/buy" className="btn btnPrimary">
              Купить доступ
            </Link>

            <Link href="/course" className="btn">
              Посмотреть уроки
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
