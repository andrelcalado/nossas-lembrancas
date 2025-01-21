// Core
import type * as next from "next"
import React from 'react';
import Head from 'next/head';

// Layout
import PageContent from './pageContent';

export const metadata: next.Metadata = {
  title: "Preparei algo especial para você!",
  description: "Este presente é sobre nós. Clique e veja momentos que marcaram nossa história.",
};

export default function UserPage({ params }: { params: { path: string } }) {
  const decodedPath = decodeURIComponent(params.path);

  return (
    <>
      <Head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nossas-lembrancas.vercel.app" />
      </Head>

      <PageContent path={decodedPath} />      
  </>)
}
