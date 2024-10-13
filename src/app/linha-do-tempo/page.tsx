'use client'

// Core
import React, { useState, useEffect } from 'react'

// Styles
import { PageContent } from '../styles'
import { useAppContext } from '@/components/ProvidersWrapper'
import Loading from '@/components/Loading'

const TimeLine = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useAppContext();

  useEffect(() => {
    if(user) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [user])
  

  return (
    <PageContent>
      {loading ? (
        <Loading loading={loading} size="lg" />
      ) : (
        <div style={{ zIndex: 5 }}>
          Olá {user?.email}
        </div>
      )}
    </PageContent>
  )
}

export default TimeLine