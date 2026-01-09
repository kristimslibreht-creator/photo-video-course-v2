import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 34, marginBottom: 8 }}>
        Снимай смело: фото и видео с нуля (на телефон)
      </h1>

      <p style={{ opacity: 0.8, marginBottom: 20 }}>
        Минимум теории — максимум практики. Для тех, кто хочет наконец понять кадр и начать снимать уверенно.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
        <Link href="/buy" style={btnPrimary}>Купить доступ</Link>
        <Link href="/course" style={btn}>Посмотреть уроки</Link>
        <Link href="/login?next=%2Fcourse" style={btn}>Войти по паролю</Link>
      </div>

      <div style={card}>
        <b>Важно:</b> если ты видишь 404 на <code>/course</code>, значит нет файла{" "}
        <code>app/course/page.tsx</code>. В этом решении он есть ✅
      </div>
    </main>
  );
}

const btn: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 16px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.2)",
  textDecoration: "none",
};

const btnPrimary: React.CSSProperties = {
  ...btn,
  border: "1px solid rgba(0,0,0,0.2)",
  background: "linear-gradient(90deg,#3b82f6,#22c55e)",
  color: "white",
};

const card: React.CSSProperties = {
  marginTop: 16,
  padding: 14,
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.15)",
};
