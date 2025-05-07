import { useState } from 'react'

import { YellowButton } from '@/components/Button/YellowButton'
import { MainLayout } from '@/components/MainLayout/MainLayout'
import { RatingSelector, SchoolFoodReviewSuccessModal } from '@/features/school-food/ui'
import { useModal } from '@/hooks/useModal'

import styles from './SchoolFoodReviewPage.module.css'

export const SchoolFoodReviewPage = () => {
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
    <>
      <MainLayout title={'리뷰 등록'} hasBackgroundColor>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.title}>오늘의 학식</p>
            <p className={styles.subtitle}>맛있게 드셨나요?</p>

            <RatingSelector rating={rating} onRate={setRating} />

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
      </MainLayout>

      <SchoolFoodReviewSuccessModal isOpen={isOpen} onClose={closeModal} />
    </>
  )
}
