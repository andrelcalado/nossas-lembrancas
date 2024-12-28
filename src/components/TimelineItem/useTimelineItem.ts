'use client'

// Core
import { useRef, useState } from "react";

// Utils
import { useOnClickOutside } from "@/utils/useClickOutside";

const useTimelineItem = () => {
  const [openAddPopup, setOpenAddPopup] = useState(false);
  const PopupContentRef = useRef(null);

  useOnClickOutside(PopupContentRef, () => setOpenAddPopup(false));

  return {
    openAddPopup,
    setOpenAddPopup,
    PopupContentRef
  }
}

export default useTimelineItem