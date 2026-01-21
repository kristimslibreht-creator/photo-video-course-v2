// app/course/page.tsx
import Image from "next/image";
import Link from "next/link";
import { lessons, COURSE_TITLE } from "@/lib/course";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function CourseIndexPage() {
  return (
    <>
      <Nav />

      <div className="container">
        <div className="card" style={{ marginTop: 24 }}>
          <h1 style={{ marginTop: 0 }}>{COURSE_TITLE}</h1>
          <div className="small">Выбери урок и проходи обучение пошагово.</div>
        </div>

        <div className="grid2" style={{ marginTop: 12 }}>
          {lessons.map((l) => (
            <div key={l.slug} className="card">
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div
                  style={{
                    width: 96,
                    height: 72,
                    borderRadius: 12,
                    overflow: "hidden",
                    flex: "0 0 auto",
                    background: "rgba(255,255,255,0.06)",
                  }}
                >
                  <Image
                    src={l.cover}
                    alt={l.title}
                    width={192}
                    height={144}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <h3 style={{ margin: 0 }}>{l.title}</h3>
                    <div className="small">{l.duration}</div>
                  </div>
                  <div className="small" style={{ marginTop: 6 }}>
                    {l.summary}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 12 }}>
                <Link className="btn btnPrimary" href={`/course/${l.slug}`}>
                  Открыть урок →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
