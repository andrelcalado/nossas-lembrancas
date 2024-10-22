'use client'

// Core
import { useState, useEffect } from 'react'

// Hooks
import { useAppContext } from '@/components/ProvidersWrapper';

// Types
import {
  PlanResourceDataType,
  TimelineItemDataType,
} from '@/types/dataTypes';

// Constants
import { MemoryTypes } from '@/constants/dataArray';

const INITIAL_TIMELINE_DATA: Array<TimelineItemDataType> = [
  {
    type: 'initial-phrase',
    desc: ''
  }
];

const useTimeline = () => {
  const [loading, setLoading] = useState(true);
  const { user, planSelected } = useAppContext();
  const [coupleNames, setCoupleNames] = useState<string>();
  const [timelineData, setTimelineData] = useState<Array<TimelineItemDataType>>(INITIAL_TIMELINE_DATA);
  const [memoriesAvailable, setMemoriesAvailable] = useState<Array<TimelineItemDataType>>(MemoryTypes);
  const [openPlansModal, setOpenPlansModal] = useState(false);
  const [spotifyAccessToken, setSpotifyAccessToken] = useState();

  const handleSetTimelineData = (
    field: 'desc' | 'date' | 'photo' | 'video',
    index: number,
    value: string | File | Blob
  ) => {
    setTimelineData((prev) => {
      return prev.map((item, i) => {
        if (i === index) {
          return { ...item, [field]: value };
        }
        return item;
      });
    });
  };

  const handleDeleteTimelineItem = (index: number) => {
    const item = timelineData[index];

    if (Number(
      planSelected[item.type as keyof PlanResourceDataType]
    ) - timelineData.filter(
      (eachItem) => item.type === eachItem.type
    ).length >= 0) {
      setMemoriesAvailable((prev) => prev.map((eachMemory) => {
        if (eachMemory.type === item.type) {
          return { ...eachMemory, disabled: false };
        }
        return eachMemory;
      }));
    }

    setTimelineData((prev) => prev.filter((_, i) => i !== index));
  };  

  const handleAddTimelineItem = (item: TimelineItemDataType) => {
    if (Number(
      planSelected[item.type as keyof PlanResourceDataType]
    ) - timelineData.filter(
      (eachItem) => item.type === eachItem.type
    ).length <= 1) {
      setMemoriesAvailable((prev) => prev.map((eachMemory) => {
        if (eachMemory.type === item.type) {
          return { ...eachMemory, disabled: true };
        }
        return eachMemory;
      }));
    } else {
      setMemoriesAvailable((prev) => prev.map((eachMemory) => {
        if (eachMemory.type === item.type) {
          return { ...eachMemory, disabled: false };
        }
        return eachMemory;
      }));
    }

    setTimelineData((prev) => ([...prev, item]));
  }

  useEffect(() => {
    if(openPlansModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openPlansModal]);

  useEffect(() => {
    if(user) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [user]);

  useEffect(() => {
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENTID}&client_secret=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENTSECRET}`,
    }

    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then((res) => res.json())
      .then((data) => {
        setSpotifyAccessToken(data.access_token);
      })
  }, [])  
  
  return {
    loading,
    timelineData,
    handleSetTimelineData,
    coupleNames,
    setCoupleNames,
    handleAddTimelineItem,
    handleDeleteTimelineItem,
    memoriesAvailable,
    openPlansModal,
    setOpenPlansModal,
    spotifyAccessToken,
  }
}

export default useTimeline