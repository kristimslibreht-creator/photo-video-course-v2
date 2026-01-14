import Link from "next/link";

export default function Nav() {
  return (
    <div style={{ padding: 16, display: "flex", justifyContent: "space-between" }}>
      <Link href="/" style={{ fontWeight: 700, textDecoration: "none" }}>
        Kristina • Course
      </Link>

      <div style={{ display: "flex", gap: 10 }}>
        <Link href="/buy" className="btn">Купить</Link>
        <Link href="/login?next=%2Fcourse" className="btn btnPrimary">Войти</Link>
      </div>
    </div>
  );
}
