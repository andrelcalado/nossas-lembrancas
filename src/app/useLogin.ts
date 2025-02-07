'use client'

import { useState } from "react";

const useLogin = () => {
  const [openPreviewModal, setOpenPreviewModal] = useState(false);

  return {
    openPreviewModal,
    setOpenPreviewModal
  }
}

export default useLogin