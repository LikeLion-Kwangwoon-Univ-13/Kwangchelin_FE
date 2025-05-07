import { SchoolFoodReviewItem } from '@/features/school-food/ui'
import { REVIEW_DUMMY_DATA } from '@/mock'

import styles from './SchoolFoodReviewList.module.css'

export const SchoolFoodReviewList = () => {
  return (
    <div className={styles.container}>
      {REVIEW_DUMMY_DATA.map((review) => (
        <SchoolFoodReviewItem key={review.id} {...review} />
      ))}
    </div>
  )
}
