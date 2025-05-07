import { Icon } from '@/components/Icon/Icon'

import styles from './RatingStars.module.css'

const MAX_RATING = 5

export const RatingSelector = ({ rating, onRate }) => {
  const handleRate = (selectedRating) => {
    onRate(selectedRating)
  }

  return (
    <div className={styles.container}>
      {[...Array(5)].map((_, index) => {
        const isFilled = index < rating

        return (
          <button key={index} type='button' onClick={() => handleRate(index + 1)}>
            <Icon name={isFilled ? 'review-fill' : 'review-unfilled'} size={52} />
          </button>
        )
      })}
    </div>
  )
}
