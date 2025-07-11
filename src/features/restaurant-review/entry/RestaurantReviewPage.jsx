import { useState } from 'react'
import { useParams } from 'react-router'

import { MainLayout, RatingSelector, ReviewSuccessModal, YellowButton } from '@/components'
import { useModal } from '@/hooks/useModal'

import { useCreateRestaurantReview } from '../hooks/useCreateRestaurantReview'
import styles from './RestaurantReviewPage.module.css'

export const RestaurantReviewPage = () => {
  const { restaurantId } = useParams()
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')

  const { isOpen, openModal, closeModal } = useModal()
  const { createReview, isLoading, isError } = useCreateRestaurantReview()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createReview({
        placeId: restaurantId,
        rating,
        review,
        onSuccess: openModal,
      })
      setRating(0)
      setReview('')
    } catch (error) {
      console.error('리뷰 등록 실패', error)
      alert('리뷰 등록에 실패하였습니다.')
    }
  }

  const handleReviewChange = (e) => {
    setReview(e.target.value)
  }

  return (
    <MainLayout title={'리뷰 등록'}>
      <div className={styles.container}>
        <form className={styles.content} onSubmit={handleSubmit}>
          <p className={styles.title}>오늘의 맛집</p>
          <p className={styles.subtitle}>맛있게 드셨나요?</p>

          <RatingSelector rating={rating} onRate={setRating} iconSize={52} />

          <div className={styles.textareaContainer}>
            <textarea className={styles.textarea} value={review} onChange={handleReviewChange} />
            {!review && (
              <span className={styles.placeholder}>따뜻하고 솔직한 리뷰를 공유해 주세요!</span>
            )}
          </div>

          {isError && (
            <p className={styles.errorMessage}>
              리뷰 등록 중 문제가 발생했어요. 잠시 후 다시 시도해 주세요.
            </p>
          )}

          <YellowButton type='submit' disabled={!review.length || isLoading}>
            {isLoading ? '등록 중...' : '등록하기'}
          </YellowButton>
        </form>
      </div>

      <ReviewSuccessModal isOpen={isOpen} onClose={closeModal} />
    </MainLayout>
  )
}
