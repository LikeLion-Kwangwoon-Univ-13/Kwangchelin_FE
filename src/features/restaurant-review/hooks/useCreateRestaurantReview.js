import { useState } from 'react'

import { instance } from '@/api/client'

export const useCreateRestaurantReview = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // 작성한 리뷰를 서버에 넘기는 함수
  const createReview = async ({ placeId, rating, review, onSuccess }) => {
    setIsLoading(true)
    setIsError(false)

    try {
      await instance.post(`/placeReviews/${placeId}`, {
        rating,
        comment: review,
      })

      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      console.error('리뷰 등록 실패:', error)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return { createReview, isLoading, isError }
}
