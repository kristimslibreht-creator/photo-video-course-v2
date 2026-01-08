import Link from "next/link";

export function Nav() {
  return (
    <div className="container">
      <div className="nav">
        <Link href="/" className="brand">
          <span style={{width:28,height:28,borderRadius:10,background:"rgba(124,58,237,.35)",display:"inline-flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(124,58,237,.35)"}}>
            📸
          </span>
          <span>Kristina • Course</span>
          <span className="pill">Next.js</span>
        </Link>

        <div className="btnRow">
          <Link className="btn" href="/buy">Купить</Link>
          <Link className="btn btnPrimary" href="/login">Войти</Link>
        </div>
      </div>
    </div>
  );
}
