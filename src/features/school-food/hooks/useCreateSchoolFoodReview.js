import axios from 'axios'
import { useState } from 'react'

export const useCreateSchoolFoodReview = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const instance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_DOMAIN,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
  })
  // 작성한 리뷰를 서버에 넘기는 함수
  const createReview = async ({ rating, review, onSuccess }) => {
    setIsLoading(true)
    setIsError(false)
    try {
      await instance.post('/reviews', {
        rating,
        review,
      })

      if (onSuccess) onSuccess()
    } catch (err) {
      console.error('CreateReveiw Error:', err)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return { createReview, isLoading, isError }
}
