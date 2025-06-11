import { useEffect, useState } from 'react'

export const useRestaurantDetail = (restaurantId) => {
  const [detailData, setDetailData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // 식당 상세페이지 데이터 불러오는 함수
  const fetchData = async () => {}

  // 페이지 마운트 시 데이터 패칭
  useEffect(() => {}, [])

  return { detailData, isLoading, isError }
}
