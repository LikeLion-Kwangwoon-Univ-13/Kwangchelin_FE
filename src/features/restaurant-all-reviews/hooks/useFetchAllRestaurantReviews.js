import { useEffect, useState } from 'react'

import { instance } from '@/api/client'

export const useFetchAllRestaurantReviews = ({ placeId, sortBy }) => {
  const [reviewList, setReviewList] = useState([])
  const [page, setPage] = useState(0)
  const [isLastPage, setIsLastPage] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!placeId) return
    setReviewList([])
    setIsLastPage(false)
    setIsError(false)
    setIsLoading(false)
    setPage(1)
  }, [placeId, sortBy])

  useEffect(() => {
    if (page === 0 || isLoading || isLastPage || !placeId) return

    const fetch = async () => {
      setIsLoading(true)
      try {
        const response = await instance.get(`/placeReviews/page/${page}`, {
          params: { placeId, sortBy },
        })

        const { reviewInfos = [], last = false } = response.data || response

        setReviewList((prev) => [...prev, ...reviewInfos])
        setIsLastPage(last || reviewInfos.length === 0)
      } catch (err) {
        console.error('리뷰 불러오기 실패:', err)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetch()
  }, [page, placeId, sortBy, isLoading, isLastPage])

  const loadNextPage = () => {
    if (!isLoading && !isLastPage) {
      setPage((prev) => prev + 1)
    }
  }

  const resetReviews = () => {
    setReviewList([])
    setPage(1)
    setIsLastPage(false)
    setIsError(false)
    setIsLoading(false)
  }

  return {
    reviewList,
    loadNextPage,
    enabled: !isLoading && !isLastPage && !!placeId,
    isError,
    isLoading,
    resetReviews,
  }
}
