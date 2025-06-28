import axios from 'axios'
import { useEffect, useState } from 'react'

export const useRestaurantDetail = (restaurantId) => {
  const [detailData, setDetailData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // 식당 상세페이지 데이터 불러오는 함수

  // 페이지 마운트 시 데이터 패칭
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setIsError(false)

      try {
        const response = await axios.get(`/places/{placeId}`)
        setDetailData(response.data)
      } catch (error) {
        console.error('상세정보 요청 오류:', error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    if (restaurantId) {
      fetchData()
    }
  }, [restaurantId])

  return { detailData, isLoading, isError }
}
