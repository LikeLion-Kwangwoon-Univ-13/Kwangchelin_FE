import { useState } from 'react'

import { YellowButton } from '@/components/Button/YellowButton'
import { Icon } from '@/components/Icon/Icon'
import { MainLayout } from '@/components/MainLayout/MainLayout'
import { ReviewSubmitSuccessPopUp } from '@/features/school-food/ui'
import { useModal } from '@/hooks/useModal'

import styles from './RestaurantReviewPage.module.css'

export const RestaurantReviewPage = () => {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')

  const { isOpen, openModal, closeModal } = useModal()

  const handleStarClick = (index) => {
    setRating(index + 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    openModal()
  }

  return (
    <>
      <MainLayout title={'리뷰 등록'} hasBackgroundColor>
        <div className={styles.container}>
          <form className={styles.content} onSubmit={handleSubmit}>
            <p className={styles.title}>오늘의 맛집</p>
            <p className={styles.subtitle}>맛있게 드셨나요?</p>

            <div className={styles.rating}>
              {[...Array(5)].map((_, index) => (
                <button key={index} type='button' onClick={() => handleStarClick(index)}>
                  <Icon name={index < rating ? 'review-fill' : 'review-unfilled'} size={52} />
                </button>
              ))}
            </div>

            <textarea
              className={styles.textarea}
              placeholder='따뜻하고 솔직한 리뷰를 공유해 주세요!'
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />

            <YellowButton type='submit' disabled={!review.trim()}>
              등록하기
            </YellowButton>
          </form>
        </div>
      </MainLayout>
      <ReviewSubmitSuccessPopUp isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}
