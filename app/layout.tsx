import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eczacı Klinik Psikolog Nuray Çiçek | Online Terapi",
  description: "Eczacı Klinik Psikolog Nuray Çiçek ile Şema Terapi ve ACT temelli, güvenli online bireysel terapi.",
  keywords: ["klinik psikolog", "online terapi", "şema terapi", "ACT", "Nuray Çiçek"],
  openGraph: { title: "Eczacı Klinik Psikolog Nuray Çiçek", description: "Bilimsel temellere dayanan online bireysel terapi.", type: "website", locale: "tr_TR" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
