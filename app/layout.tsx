import "./globals.css";

export const metadata = {
  title: "Kristina Course",
  description: "Курс фото и видео с нуля",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
