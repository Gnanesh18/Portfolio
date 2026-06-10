import type { Metadata } from "next";
import { Bebas_Neue, Oswald, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gnanesh K C | Full Stack Developer & MCA Student",
  description: "Portfolio of Gnanesh K C, an MCA student and aspiring Full Stack Developer. Building software with the discipline of an athlete, teamwork, persistence, and continuous growth.",
  authors: [{ name: "Gnanesh K C" }],
  keywords: ["Gnanesh K C", "Full Stack Developer", "MCA Student", "Portfolio", "Software Engineer", "Karasuno", "Haikyu Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${oswald.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-[#0B0B0B] text-white font-sans flex flex-col">{children}</body>
    </html>
  );
}

