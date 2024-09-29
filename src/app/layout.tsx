// Core
import type * as next from "next"
import localFont from "next/font/local";

// Libraries
import StyledComponentsRegistry from './registry';

// Styles
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Aeonik = localFont({
  src: [
    {
      path: "./fonts/Aeonik-Light.woff",
      style: 'normal',
      weight: "300",
    },
    {
      path: "./fonts/Aeonik-LightItalic.woff",
      style: 'italic',
      weight: "300",
    },
    {
      path: "./fonts/Aeonik-Regular.woff",
      style: 'normal',
      weight: "400",
    },
    {
      path: "./fonts/Aeonik-RegularItalic.woff",
      style: 'italic',
      weight: "400",
    },
    {
      path: "./fonts/Aeonik-Bold.woff",
      style: 'normal',
      weight: "700",
    },
    {
      path: "./fonts/Aeonik-BoldItalic.woff",
      style: 'italic',
      weight: "700",
    },
  ]
},
);

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
      <body className={Aeonik.className}>
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
