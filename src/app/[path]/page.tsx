'use client';

// Core
import React from 'react';
import Head from 'next/head';

// Components
import PreviewModal from '@/components/PreviewModal';

// Hooks
import usePath from './usePath';
import Loading from '@/components/Loading';

export default function UserPage({ params }: { params: { path: string } }) {
  const decodedPath = decodeURIComponent(params.path);
  const { coupleTimeline } = usePath(decodedPath);

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

      {coupleTimeline ? (
        <PreviewModal
          openModal
          isGift
          timelineData={coupleTimeline}
          setOpenModal={() => {}}
          handleToGift={() => {}}
        />
      ) : (
        <Loading loading={!coupleTimeline} type="screen" />
      )}
  </>)
}
