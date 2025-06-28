import axios from 'axios'
import { useState } from 'react'

export const useFetchReviewList = () => {
  const [reviewList, setReviewList] = useState([]) // 누적된 리뷰 목록
  const [page, setPage] = useState(1) // 현재 페이지
  const [isLastPage, setIsLastPage] = useState(false) // 더 불러올 데이터가 없을 때 true
  const [isError, setIsError] = useState(false) // 에러 상태
  const [isLoading, setIsLoading] = useState(false) // 로딩 중 여부
  const instance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_DOMAIN,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
  })

  const enabled = !isLoading && !isLastPage && !isError

  const loadNextPage = async () => {
    if (!enabled) return

    try {
      setIsLoading(true)
      setIsError(false)

      const response = await instance.get(`/reviews/page/${page}`, {
        headers: {
          'Cache-Control': 'no-cache',
        },
      })

      console.log('[응답 데이터]', response.data)

      const { searchedReviews: reviews, last: isLast } = response.data

      if (reviews.length === 0) {
        setIsLastPage(true)
        return
      }

      setReviewList((prev) => [...prev, ...reviews])

      if (isLast) {
        setIsLastPage(true)
      }

      setReviewList((prev) => [...prev, ...reviews])
      setPage((prev) => prev + 1)
    } catch (err) {
      console.error('Review Request err:', err)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  console.log('[최종 리뷰 리스트]', reviewList)

  return { reviewList, loadNextPage, enabled, isError, isLoading }
}
