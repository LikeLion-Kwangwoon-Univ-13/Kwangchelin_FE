import { useState } from 'react'

import { MainLayout, RatingSelector, ReviewSuccessModal, YellowButton } from '@/components'
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
    /**
     * TODO: 사용자가 textarea에 입력한 리뷰 내용을 상태로 저장하려면 어떻게 해야 할까요?
     */
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
