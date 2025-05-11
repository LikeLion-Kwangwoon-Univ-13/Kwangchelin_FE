import { ReviewItem } from '@/components'

import { fetchSchoolFoodReviewList } from '../domain/api/fetchSchoolFoodReview'
import styles from './SchoolFoodReviewList.module.css'

/**
 * 학식 리뷰 목록을 렌더링하는 컴포넌트
 */

export const SchoolFoodReviewList = () => {
  const reviewList = fetchSchoolFoodReviewList()

  return (
    <div className={styles.container}>
      {reviewList.map((review) => (
        <ReviewItem key={review.id} {...review} />
      ))}
    </div>
  )
}
