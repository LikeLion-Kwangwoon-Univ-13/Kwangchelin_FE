import { Icon } from '@/components'

import styles from './RatingSelector.module.css'

/**
 * 1~5점까지 평점을 선택할 수 있는 별점 선택 컴포넌트
 *
 * @param {Object} props
 * @param {number} props.rating - 현재 선택된 평점 (1~5)
 * @param {(rating: number) => void} props.onRate - 평점 클릭 시 호출되는 콜백
 * @param {number} props.iconSize - 아이콘 크기 (px 단위)
 * @returns {JSX.Element}
 */

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
