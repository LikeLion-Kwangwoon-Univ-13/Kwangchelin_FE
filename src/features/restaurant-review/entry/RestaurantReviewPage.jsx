import { useState } from 'react'

import { YellowButton } from '@/components'
import { MainLayout } from '@/components/MainLayout/MainLayout'
import { RatingSelector } from '@/components/RatingSelector'
import { ReviewSuccessModal } from '@/components/ReviewSuccessModal'
import { useModal } from '@/hooks/useModal'

import styles from './RestaurantReviewPage.module.css'

export const RestaurantReviewPage = () => {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')

  const { isOpen, openModal, closeModal } = useModal()

  const handleSubmit = (e) => {
    e.preventDefault()
    openModal()
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

          <YellowButton type='submit' disabled={!review.trim()}>
            등록하기
          </YellowButton>
        </form>
      </div>

      <ReviewSuccessModal isOpen={isOpen} onClose={closeModal} />
    </MainLayout>
  )
}
