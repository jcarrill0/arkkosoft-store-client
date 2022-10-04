import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'


export function useIsLoading() {
  const [isLoading, setIsLoading] = useState(true)
  const { currentUser } = useAuth()

  const renderLoading = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }

  useEffect(() => {
    if(currentUser) renderLoading()
  }, [currentUser])
  
  return { isLoading }
}
