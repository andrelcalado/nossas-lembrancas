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
import { ProvidersWrapper } from "@/components/ProvidersWrapper";

export const Poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins-Light.woff",
      style: 'normal',
      weight: "300",
    },
    {
      path: "./fonts/Poppins-Regular.woff",
      style: 'normal',
      weight: "400",
    },
    {
      path: "./fonts/Poppins-Italic.woff",
      style: 'italic',
      weight: "400",
    },
    {
      path: "./fonts/Poppins-Medium.woff",
      style: 'normal',
      weight: "500",
    },
    {
      path: "./fonts/Poppins-MediumItalic.woff",
      style: 'italic',
      weight: "500",
    },
    {
      path: "./fonts/Poppins-Bold.woff",
      style: 'normal',
      weight: "700",
    },
    {
      path: "./fonts/Poppins-BoldItalic.woff",
      style: 'italic',
      weight: "700",
    },
  ]
},
);

export const metadata: next.Metadata = {
  title: "Nossas Lembranças",
  description: "Cada segundo da nossa história.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={Poppins.className}>
        <main>
          <StyledComponentsRegistry>
            <ProvidersWrapper>
              <Header />
              {children}
              <Footer />
            </ProvidersWrapper>
          </StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}
