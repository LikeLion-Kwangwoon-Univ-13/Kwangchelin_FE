import { Icon } from '@/components/Icon/Icon'

import styles from './RatingSelector.module.css'

export const RatingSelector = ({ rating, onRate, iconSize }) => {
  const handleRate = (selectedRating) => {
    onRate(selectedRating)
  }

  return (
    <div className={styles.container}>
      {[...Array(5)].map((_, index) => {
        const isFilled = index < rating

        return (
          <button key={index} type='button' onClick={() => handleRate(index + 1)}>
            <Icon name={isFilled ? 'review-fill' : 'review-unfilled'} size={iconSize} />
          </button>
        )
      })}
    </div>
  )
}
