'use client'; // Declarar como um componente cliente

// Core
import React from 'react';

// Hooks
import usePath from './usePath';
import PreviewModal from '@/components/PreviewModal';

export default function UserPage({ params }: { params: { path: string } }) {
  const decodedPath = decodeURIComponent(params.path);
  const { coupleTimeline } = usePath(decodedPath);

  return (
    <div>
      <h1>Bem-vindo!</h1>
      {coupleTimeline ? (
        <PreviewModal
          openModal
          timelineData={coupleTimeline}
          setOpenModal={() => {}}
          handleToGift={() => {}}
          />
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
