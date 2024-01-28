import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Providers } from "./providers";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Physics Dojo",
  description: "Learn physics with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-min-screen">
      <body className={`${nunito.className} h-min-screen min-h-min-screen`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
