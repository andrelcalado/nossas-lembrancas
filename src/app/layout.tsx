// Core
import type * as next from "next";

// Libraries
import StyledComponentsRegistry from './registry';

// Typography
import localFont from "next/font/local";

// Styles
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: next.Metadata = {
  title: "Nossas Memórias",
  description: "Cada segundo da nossa história.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main>
          <StyledComponentsRegistry>
            <Header />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}
