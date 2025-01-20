'use client';

// Core
import React from 'react';

// Components
import PreviewModal from '@/components/PreviewModal';

// Hooks
import usePath from './usePath';
import Loading from '@/components/Loading';

export default function UserPage({ params }: { params: { path: string } }) {
  const decodedPath = decodeURIComponent(params.path);
  const { coupleTimeline } = usePath(decodedPath);

  return coupleTimeline ? (
    <PreviewModal
      openModal
      isGift
      timelineData={coupleTimeline}
      setOpenModal={() => {}}
      handleToGift={() => {}}
    />
  ) : (
    <Loading loading={!coupleTimeline} type="screen" />
  );
}
