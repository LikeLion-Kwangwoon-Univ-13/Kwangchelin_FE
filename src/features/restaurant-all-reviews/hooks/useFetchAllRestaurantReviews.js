import { useEffect, useState } from 'react'

import { instance } from '@/api/client'

export const useFetchAllRestaurantReviews = ({ placeId, sortBy }) => {
  const [reviewList, setReviewList] = useState([])
  const [page, setPage] = useState(1)
  const [isLastPage, setIsLastPage] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const enabled = !isLoading && !isLastPage && !isError

  useEffect(() => {
    setReviewList([])
    setPage(1)
    setIsLastPage(false)
    setIsError(false)
    setIsLoading(false)
  }, [placeId, sortBy])

  const loadNextPage = async () => {
    if (!enabled) return

    try {
      setIsLoading(true)
      setIsError(false)

      const response = await instance.get(`/placeReviews/page/${page}`, {
        params: { placeId, sortBy },
      })

      const { reviewInfos = [], last = false } = response

      if (reviewInfos.length === 0 || last) {
        setIsLastPage(true)
      }

      setReviewList((prev) => [...prev, ...reviewInfos])
      setPage((prev) => prev + 1)
    } catch (error) {
      console.error('리뷰 불러오기 실패:', error)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return { reviewList, loadNextPage, enabled, isError, isLoading }
}
