import { Icon } from '@/components/Icon/Icon'

import styles from './ReviewSummary.module.css'

export const ReviewSummary = ({ average, totalReviews, scores }) => {
  const maxScoreCount = Math.max(...Object.values(scores))

  return (
    <div className={styles.summary}>
      <div className={styles.average}>
        <Icon name={'review-fill'} size={20} />
        <span className={styles.averageScore}>{average}</span>
        <span className={styles.totalCount}>({totalReviews})</span>
      </div>

      <div className={styles.scoreBars}>
        {[5, 4, 3, 2, 1].map((score) => (
          <div key={score} className={styles.scoreRow}>
            <span className={styles.scoreLabel}>{score}</span>
            <div
              className={styles.barFill}
              style={{ width: `${(scores[score] / maxScoreCount) * 100}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
