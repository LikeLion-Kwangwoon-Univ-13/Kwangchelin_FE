import { Icon } from '@/components'

import styles from './ReviewSummary.module.css'

/**
 * 평균 평점과 평점 분포 바 시각화 컴포넌트
 *
 * @param {Object} props
 * @param {number} props.average - 평균 평점
 * @param {number} props.totalReviews - 총 리뷰 수
 * @param {Array} props.scores - 평점 분포
 */

export const ReviewSummary = ({ average, totalReviews, scores }) => {
  const maxScoreCount = Math.max(...scores)

  return (
    <div className={styles.summary}>
      <div className={styles.average}>
        <Icon name={'review-fill'} size={20} />
        <span className={styles.averageScore}>{average}</span>
        <span className={styles.totalCount}>({totalReviews})</span>
      </div>

      <div className={styles.scoreBars}>
        {scores.reverse().map((score, index) => (
          <div key={index} className={styles.scoreRow}>
            <span className={styles.scoreLabel}>{5 - index}</span>
            <div
              className={styles.barFill}
              style={{ width: `${(score / maxScoreCount) * 100}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
