import { Link, useParams } from 'react-router'

import { FloatingButton, Icon, ReviewItem } from '@/components'
import { REVIEW_DUMMY_DATA } from '@/mock'

import styles from './RestaurantReview.module.css'
import { ReviewSummary } from './ReviewSummary'

/**
 * 리뷰 요약 + 리뷰 리스트 + 플로팅 버튼 구성
 *
 * - 상세 페이지의 '리뷰' 탭에서 사용
 *
 * @param {Object} props
 * @param {number} props.average - 평균 평점
 * @param {number} props.totalReviews - 총 리뷰 수
 * @param {Object} props.scores - 평점 분포
 */

export const RestaurantReview = ({ average, totalReviews, scores }) => {
  const { restaurantId } = useParams()

  return (
    <>
      <section className={styles.container}>
        <h5 className={styles.header}>광운인들이 남긴 방문 리뷰예요!</h5>
        <ReviewSummary average={average} totalReviews={totalReviews} scores={scores} />
      </section>

      <Link to={`/restaurant/${restaurantId}/reviews`} className={styles.reviewLink}>
        <span>리뷰 전체보기</span>
        <Icon name={'shape-arrow-right'} size={13} fill={'#7A7A7A'} />
      </Link>

      <div>
        {REVIEW_DUMMY_DATA.map(({ id, nickname, date, content, rating }) => (
          <ReviewItem key={id} nickname={nickname} date={date} content={content} rating={rating} />
        ))}
      </div>

      <FloatingButton to={`/restaurant/${restaurantId}/review`} />
    </>
  )
}
