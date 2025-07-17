import { useState } from 'react'

import { MainLayout, RatingSelector, ReviewSuccessModal, YellowButton } from '@/components'
import { useModal } from '@/hooks/useModal'

import { useCreateSchoolFoodReview } from '../hooks/useCreateSchoolFoodReview'
import styles from './SchoolFoodReviewPage.module.css'

export const SchoolFoodReviewPage = () => {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')

  const { isOpen, openModal, closeModal } = useModal()
  const { createReview, isLoading, isError } = useCreateSchoolFoodReview()

  // TODO: 폼 제출하는 함수 작성
  const handleSubmit = (e) => {
    e.preventDefault()

    createReview({
      rating,
      review,
      onSuccess: () => {
        openModal(), setRating(0), setReview('')
      },
    })
  }

  // TODO: 로딩과 에러 처리는 어떻게 할까 고민해보기.

  const handleReviewChange = (e) => {
    setReview(e.target.value)
  }

  return (
    <>
      <MainLayout title={'리뷰 등록'}>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.title}>오늘의 학식</p>
            <p className={styles.subtitle}>맛있게 드셨나요?</p>

            <RatingSelector rating={rating} onRate={setRating} iconSize={52} />

            <div className={styles.textareaContainer}>
              <textarea className={styles.textarea} value={review} onChange={handleReviewChange} />
              {!review && (
                <span className={styles.placeholder}>따뜻하고 솔직한 리뷰를 공유해 주세요!</span>
              )}
            </div>

            {isLoading && <p className={styles.loading}>로딩중</p>}
            {isError && <p className={styles.error}>에러 발생</p>}

            <YellowButton type='submit' disabled={!review.trim()}>
              등록하기
            </YellowButton>
          </form>
        </div>
      </MainLayout>

      <ReviewSuccessModal isOpen={isOpen} onClose={closeModal} />
    </>
  )
}
