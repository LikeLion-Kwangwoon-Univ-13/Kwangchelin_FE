import { Icon } from '@/components/Icon/Icon'

import styles from './ReviewItem.module.css'

export const ReviewItem = ({ nickname, date, content, rating }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.nickname}>{nickname}</p>
        <p className={styles.date}>{date}</p>
      </div>
      <div className={styles.rating}>
        {[...Array(rating)].map((_, index) => (
          <Icon key={index} name={'review-fill'} size={20} />
        ))}
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  )
}
