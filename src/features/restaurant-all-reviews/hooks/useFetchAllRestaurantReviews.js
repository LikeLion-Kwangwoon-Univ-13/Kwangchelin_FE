import { useState } from 'react'

import { instance } from '@/api/client'

export const useFetchAllRestaurantReviews = ({ placeId, sortBy }) => {
  const [reviewList, setReviewList] = useState([]) // 리뷰 목록 상태
  const [page, setPage] = useState(1) // 현재 페이지 번호
  const [isLastPage, setIsLastPage] = useState(false) // 마지막 페이지 여부
  const [isError, setIsError] = useState(false) // 에러 발생 여부
  const [isLoading, setIsLoading] = useState(false) // 로딩 중 여부

  // 다음 페이지 요청 가능 여부
  const enabled = !isLoading && !isLastPage

  // 다음 페이지를 요청하는 함수
  const loadNextPage = async () => {
    if (!enabled || !placeId) return

    setIsLoading(true)
    setIsError(false)

    try {
      const response = await instance.get('/api/placeReviews/page', {
        params: {
          placeId,
          page,
          sortBy,
        },
      })

      const { reviews = [], isLast = false } = response

      setReviewList((prev) => [...prev, ...reviews])
      setPage((prev) => prev + 1)
      setIsLastPage(isLast || reviews.length === 0)
    } catch (error) {
      console.error('리뷰 불러오기 실패:', error)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return { reviewList, loadNextPage, enabled, isError, isLoading }
}
