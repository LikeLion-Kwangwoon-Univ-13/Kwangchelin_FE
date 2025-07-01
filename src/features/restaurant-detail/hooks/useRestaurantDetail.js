import { useEffect, useState } from 'react'

import { instance } from '@/api/client'

export const useRestaurantDetail = (restaurantId) => {
  const [detailData, setDetailData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if (!restaurantId) {
        setIsError(true)
        return
      }

      setIsLoading(true)
      setIsError(false)

      try {
        const response = await instance.get(`/places/${restaurantId}`)
        setDetailData(response)
      } catch {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [restaurantId])

  return { detailData, isLoading, isError }
}
