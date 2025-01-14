'use client'

// Core
import { useEffect, useState } from 'react';

// Libraries
import { doc, getDoc } from 'firebase/firestore';

// Auth
import { timelinesDB } from '@/auth/firebase';

const usePath = (path : string) => {
  const [coupleTimeline, setCoupleTimeline] = useState(null);

  useEffect(() => {
    const getTimelineDataByCouplePath = async () => {
      try {
        const docRef = doc(timelinesDB, 'timelines', path);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          const timelineData = docSnap.data().timelineData;
          console.log('timeline casal', timelineData);
          setCoupleTimeline(timelineData);
        } else {
          console.error(`Nenhum documento encontrado para o couplePath: ${path}`);
          return null;
        }
      } catch (error) {
        console.error('Erro ao buscar timelineData: ', error);
        throw new Error('Não foi possível buscar os dados da timeline.');
      }
    };

    getTimelineDataByCouplePath();
  }, [path])
  
  return {
    coupleTimeline,
  }
};

export default usePath;
