'use client'

// Core
import { useState } from "react";

const useLogin = () => {
  const [openPreviewModal, setOpenPreviewModal] = useState(false);
  const [howItWorksModal, setHowItWorksModal] = useState(false)

  return {
    openPreviewModal,
    setOpenPreviewModal,
    howItWorksModal,
    setHowItWorksModal
  }
}

export default useLogin