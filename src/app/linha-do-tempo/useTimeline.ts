'use client'

// Core
import { useState, useEffect } from 'react'

// Hooks
import { useAppContext } from '@/components/ProvidersWrapper';

// Types
import { TimelineItemDataType } from '@/types/dataTypes';
import { TimelineItemTypeENUM } from '@/types/layoutTypes';

const INITIAL_TIMELINE_DATA: Array<TimelineItemDataType> = [
  {
    type: 'initial-phrase',
    desc: ''
  }
];

const useTimeline = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useAppContext();
  const [coupleNames, setCoupleNames] = useState<string>();
  const [timelineData, setTimelineData] = useState<Array<TimelineItemDataType>>(INITIAL_TIMELINE_DATA);

  const handleSetTimelineData = (
    field: 'desc' | 'date' | 'photo' | 'video',
    index: number,
    value: string
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
    setTimelineData((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    console.log('aq', timelineData);
  }, [timelineData])
  

  const handleAddTimelineItem = (item: TimelineItemDataType) => {
    setTimelineData((prev) => ([...prev, item]));
  }

  useEffect(() => {
    if(user) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [user])
  
  return {
    loading,
    timelineData,
    handleSetTimelineData,
    coupleNames,
    setCoupleNames,
    handleAddTimelineItem,
    handleDeleteTimelineItem,
  }
}

export default useTimeline