'use client'

// Core
import React from 'react'

// Hooks
import usePath from './usePath';

// Components
import PreviewModal from '@/components/PreviewModal';
import Loading from '@/components/Loading';

const PageContent = ({ path }: { path: string }) => {
const { coupleTimeline } = usePath(path);
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
  )
}

export default PageContent