import { useState } from 'react'

const useHome = () => {
  const [openModal, setOpenModal] = useState(false)

  return {
    openModal,
    setOpenModal  
  }
}

export default useHome