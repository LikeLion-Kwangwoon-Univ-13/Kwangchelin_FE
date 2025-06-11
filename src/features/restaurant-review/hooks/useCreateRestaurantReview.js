import { useState } from 'react'

export const useCreateRestaurantReview = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // 작성한 리뷰를 서버에 넘기는 함수
  const createReview = async ({ rating, review, onSuccess }) => {}

  return { createReview, isLoading, isError }
}
