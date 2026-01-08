import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Курс: Фото и видео с нуля",
  description: "Закрытый видео-курс для начинающих. Лендинг + покупка + доступ по паролю.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
