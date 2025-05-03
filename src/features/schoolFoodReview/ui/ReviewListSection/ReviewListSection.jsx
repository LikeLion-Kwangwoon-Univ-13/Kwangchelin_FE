import { REVIEW_DUMMY_DATA } from '@/mock/review/reviewDummyData'

import { ReviewItem } from '../ReviewItem/ReviewItem'
import styles from './ReviewListSection.module.css'

export const ReviewListSection = () => {
  return (
    <div className={styles.container}>
      {REVIEW_DUMMY_DATA.map(({ id, nickname, date, content, rating }) => (
        <ReviewItem key={id} nickname={nickname} date={date} content={content} rating={rating} />
      ))}
    </div>
  )
}
