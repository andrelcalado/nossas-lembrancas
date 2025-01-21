// Core
import React from 'react';
import Head from 'next/head';

// Layout
import PageContent from './pageContent';

export default function UserPage({ params }: { params: { path: string } }) {
  const decodedPath = decodeURIComponent(params.path);

  return (
    <>
      <Head>
        <meta property="og:title" content="Preparei algo especial para você!" />
        <meta
          property="og:image"
          content="https://i.ibb.co/PtQ1Fs0/OG.jpg"
        />
        <meta
          property="og:description"
          content="Este presente é sobre nós. Clique e veja momentos que marcaram nossa história."
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="website" />
      </Head>

      <PageContent path={decodedPath} />      
  </>)
}
