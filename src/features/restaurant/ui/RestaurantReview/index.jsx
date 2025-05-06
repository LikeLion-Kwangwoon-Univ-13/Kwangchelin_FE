import { Link } from 'react-router'

import { FloatingButton } from '@/components/Button/FloatingButton'
import { Icon } from '@/components/Icon/Icon'
import { ReviewItem } from '@/components/ReviewItem'
import { REVIEW_DUMMY_DATA } from '@/mock/review/reviewDummyData'

import styles from './RestaurantReview.module.css'

const dummyData = {
  average: 3,
  totalReviews: 20,
  scores: {
    5: 10,
    4: 5,
    3: 3,
    2: 1,
    1: 1,
  },
}

export const RestaurantReview = () => {
  const { average, totalReviews, scores } = dummyData
  const maxScoreCount = Math.max(...Object.values(scores))

  return (
    <>
      <section className={styles.container}>
        <h5 className={styles.header}>광운인들이 남긴 방문 리뷰예요!</h5>

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
      </section>
      <Link to={'/restaurant/review'} className={styles.reviewLink}>
        <span>리뷰 전체보기</span>
        <Icon name={'shape-arrow-right'} size={13} fill={'#7A7A7A'} />
      </Link>

      <div className={styles.reviewList}>
        {REVIEW_DUMMY_DATA.map(({ id, nickname, date, content, rating }) => (
          <ReviewItem key={id} nickname={nickname} date={date} content={content} rating={rating} />
        ))}
      </div>

      <FloatingButton to={'/restaurant/review'} />
    </>
  )
}
