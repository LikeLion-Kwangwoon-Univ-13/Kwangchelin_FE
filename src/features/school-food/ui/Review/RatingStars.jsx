import { Icon } from '@/components'

import styles from './RatingStars.module.css'

export const RatingStars = ({ rating }) => {
  return (
    <div className={styles.container}>
      {[...Array(rating)].map((_, index) => (
        <Icon key={index} name='review-fill' size={20} />
      ))}
    </div>
  )
}
