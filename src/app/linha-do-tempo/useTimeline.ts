'use client'

// Core
import { useState, useEffect } from 'react'

// Auth
import { storage, timelinesDB } from '@/auth/firebase';

// Hooks
import { useAppContext } from '@/components/ProvidersWrapper';

// Libraries
import imageCompression from 'browser-image-compression';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,  
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

// Types
import {
  PlanResourceDataType,
  TimelineDataType,
  TimelineItemDataType,
} from '@/types/dataTypes';

// Constants
import { MemoryTypes, PlansData } from '@/constants/dataArray';
import { useSearchParams } from 'next/navigation';

const INITIAL_TIMELINE_DATA: Array<TimelineItemDataType> = [
  {
    type: 'initial-phrase',
    desc: '',
    mediaOrientation: 'vertical'
  }
];

const useTimeline = () => {
  const searchParams = useSearchParams();
  const verifyQuery = searchParams.get('verify');
  const [loading, setLoading] = useState(true);
  const [timelineItemLoading, setTimelineItemLoading] = useState(false);
  const [coupleNames, setCoupleNames] = useState<string>();
  const [timelineData, setTimelineData] = useState<Array<TimelineItemDataType>>(INITIAL_TIMELINE_DATA);
  const [memoriesAvailable, setMemoriesAvailable] = useState<Array<TimelineItemDataType>>(MemoryTypes);
  const [openPlansModal, setOpenPlansModal] = useState(false);
  const [openPreviewModal, setOpenPreviewModal] = useState(false);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [spotifyAccessToken, setSpotifyAccessToken] = useState();
  const [musicLink, setMusicLink] = useState<string>();
  const [timelineID, setTimelineID] = useState<string>();
  const {
    user,
    planSelected,
    setPlanSelected,
    setPaymentMethodsModal,
    setPlanPaid,
    planPaidAt,
    setPlanPaidAt,
  } = useAppContext();

  const handleSetTimelineData = async (
    field: 'desc' | 'date' | 'photo' | 'video' | 'mediaOrientation',
    index: number,
    value: string | File | Blob
  ) => {
    let auxValue = value;

    if (field === 'photo' && value) {
      setTimelineItemLoading(true);
      console.log(`originalFile size ${(value as File).size / 1024 / 1024} MB`);
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      }

      try {
        auxValue = await imageCompression(value as File, options);
        console.log(`compressedFile size ${auxValue.size / 1024 / 1024} MB`);
      } catch (error) {
        console.log('compress error', error);
      }
    }

    setTimelineData((prev) => {
      return prev.map((item, i) => {
        if (i === index) {
          return { ...item, [field]: auxValue };
        }
        return item;
      });
    });
    setTimelineItemLoading(false);
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

    delete item.typeLabel;
    delete item.typeIcon;
    setTimelineData((prev) => ([...prev, item]));
  }

  const handleSubmitForm = async () => {
    setSubmitLoading(true);

    const uid = user?.uid;
    const hash = uuidv4();
    const urlSlug = `${String(coupleNames).toLowerCase().replace(/\s+/g, '-')}-${hash}`;

    setTimelineID(urlSlug);

    const updatedTimelineData = await Promise.all(timelineData.map(async (item, index) => {
      if (item.photo || item.video) {
        const fileURL = `timelines/${uid}/${urlSlug}/media-${index}`;
        const fileRef = ref(storage, fileURL);
        const file = item.photo || item.video;

        const snapshot = await uploadBytes(fileRef, file as Blob);
        const fileUrl = await getDownloadURL(snapshot.ref);
  
        if (item.photo) {
          return {
            ...item,
            photo: item.photo ? fileUrl : null,
            fileRef : fileURL
          };
        } else {
          return {
            ...item,
            video: item.video ? fileUrl : null,
            fileRef : fileURL
          };
        }
      }

      return item;
    }));
  
    await setDoc(doc(timelinesDB, 'timelines', urlSlug), {
      coupleNames,
      timelineData: updatedTimelineData,
      musicLink: musicLink || null,
      createdAt: new Date().toISOString(),
      userId: uid,
      plan: planSelected.plan,
    }).then(() => {
      setSubmitLoading(false);
      setPaymentMethodsModal(true);
    }).catch((error) => {
      console.error('Error saving timeline: ', error);
      setSubmitLoading(false);
    });
  }

  const handleUpdateForm = async () => {
    setSubmitLoading(true);

    const uid = user?.uid;
    const urlSlug = timelineID;

    const updatedTimelineData = await Promise.all(timelineData.map(async (item, index) => {
      if (item.photo || item.video) {
        const filePath = `timelines/${uid}/${urlSlug}/media-${index}`;
        const fileRef = ref(storage, filePath);
        const file = item.photo || item.video;

        if (typeof file === 'string') {
          if (item.photo) {
            return {
              ...item,
              photo: file ?? null,
              fileRef : filePath
            };
          } else {
            return {
              ...item,
              video: file ?? null,
              fileRef : filePath
            };
          }
        }
        const snapshot = await uploadBytes(fileRef, file as Blob);
        const fileUrl = await getDownloadURL(snapshot.ref);
  
        if (item.photo) {
          return {
            ...item,
            photo: item.photo ? fileUrl : null,
            fileRef : filePath
          };
        } else {
          return {
            ...item,
            video: item.video ? fileUrl : null,
            fileRef : filePath
          };
        }
      }

      return item;
    }));
  
    await updateDoc(doc(timelinesDB, 'timelines', urlSlug as string), {
      coupleNames,
      timelineData: updatedTimelineData,
      musicLink: musicLink || null,
      userId: uid,
      plan: planSelected.plan,
    }).then(() => {
      setSubmitLoading(false);
      setPaymentMethodsModal(true);
    }).catch((error) => {
      console.error('Error saving timeline: ', error);
      setSubmitLoading(false);
    });
  }  

  useEffect(() => {
    if(openPlansModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openPlansModal]);

  // When user has timeline data
  useEffect(() => {
    if (!user) {
      return;
    }    
    setLoading(true);

    const getUserTimeline = async () => {
      const timelineQuery = query(collection(timelinesDB, 'timelines'), where('userId', '==', user?.uid));
  
      const querySnapshot = await getDocs(timelineQuery);
    
      const timelines = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        console.log('doc', data);

        const eachItem: TimelineDataType = {
          id: doc.id,
          coupleNames: data.coupleNames,
          timelineData: data.timelineData,
          musicLink: data.musicLink,
          createdAt: data.createdAt,
          userId: data.userId,
          plan: data.plan,
        };
        setCoupleNames(eachItem.coupleNames);
        setMusicLink(eachItem.musicLink);
        setTimelineData(eachItem.timelineData);
        setTimelineID(eachItem.id);
        setPlanPaid(data.planPaid);
        setPlanPaidAt(data.planPaidAt);

        const planAux = PlansData.find((eachPlan) => eachPlan.plan === eachItem.plan) || PlansData[0];
        setPlanSelected(planAux);

        const timelineCount : Record<'photo' | 'video' | 'phrase', number> = {
          photo: eachItem.timelineData.filter((item) => item.type === 'photo').length,
          video: eachItem.timelineData.filter((item) => item.type === 'video').length,
          phrase: eachItem.timelineData.filter((item) => item.type === 'phrase').length,
        }

        setMemoriesAvailable((prev) => prev.map((eachMemory) => {
          if (eachMemory.type !== 'photo' && eachMemory.type !== 'video' && eachMemory.type !== 'phrase') {
            return eachMemory;
          }
          if (timelineCount[eachMemory.type] >= planAux[eachMemory.type]) {
            return { ...eachMemory, disabled: true };
          }
          return eachMemory;
        }));

        return data.planPaidAt;
      });

      return timelines.length > 0 ? timelines[0] : null;
    }

    let interval: NodeJS.Timeout | null = null;
    
    const fetchData = async () => {
      await getUserTimeline().then((planData) => {
        if (verifyQuery === "payment" && planData || !verifyQuery) {
          setLoading(false);
          if (interval) clearInterval(interval);

          if (verifyQuery === "payment") {
            setPaymentMethodsModal(true);
          }
        }
      });
    };

    fetchData();

    if (verifyQuery === "payment" && !planPaidAt) {
      interval = setInterval(async () => {
        await fetchData();
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
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
    musicLink,
    setMusicLink,
    openPreviewModal,
    setOpenPreviewModal,
    previewLoading,
    setPreviewLoading,
    handleSubmitForm,
    submitLoading,
    setSubmitLoading,
    timelineItemLoading,
    timelineID,
    handleUpdateForm,
  }
}

export default useTimeline