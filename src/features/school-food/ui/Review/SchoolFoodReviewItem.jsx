import { RatingStars } from '@/features/school-food/ui'

import styles from './SchoolFoodReviewItem.module.css'

export const SchoolFoodReviewItem = ({ nickname, date, content, rating }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.nickname}>{nickname}</p>
        <p className={styles.date}>{date}</p>
      </div>

      <RatingStars rating={rating} />

      <p className={styles.content}>{content}</p>
    </div>
  )
}
