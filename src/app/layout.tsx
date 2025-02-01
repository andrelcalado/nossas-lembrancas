// Core
import type * as next from "next"
import { Suspense } from "react";
import localFont from "next/font/local";

// Libraries
import StyledComponentsRegistry from './registry';
import { GoogleAnalytics } from "@next/third-parties/google";

// Styles
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProvidersWrapper } from "@/components/ProvidersWrapper";

export const Poppins = localFont({
  src: [
    {
      path: "../assets/fonts/Poppins-Light.woff",
      style: 'normal',
      weight: "300",
    },
    {
      path: "../assets/fonts/Poppins-Regular.woff",
      style: 'normal',
      weight: "400",
    },
    {
      path: "../assets/fonts/Poppins-Italic.woff",
      style: 'italic',
      weight: "400",
    },
    {
      path: "../assets/fonts/Poppins-Medium.woff",
      style: 'normal',
      weight: "500",
    },
    {
      path: "../assets/fonts/Poppins-MediumItalic.woff",
      style: 'italic',
      weight: "500",
    },
    {
      path: "../assets/fonts/Poppins-Bold.woff",
      style: 'normal',
      weight: "700",
    },
    {
      path: "../assets/fonts/Poppins-BoldItalic.woff",
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
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <body className={Poppins.className}>
        <main>
          <StyledComponentsRegistry>
            <Suspense>
              <ProvidersWrapper>
                <Header />
                {children}
                <Footer />
              </ProvidersWrapper>
            </Suspense>
          </StyledComponentsRegistry>
        </main>

        <GoogleAnalytics gaId="G-BMRFMPDHKW" />
      </body>
    </html>
  );
}
