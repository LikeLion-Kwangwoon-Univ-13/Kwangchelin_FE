import { Link, useParams } from 'react-router'

import { FloatingButton, Icon } from '@/components'
import { ReviewItem } from '@/components/ReviewItem/ReviewItem'
import { formatDateTime } from '@/utils/formatDateTime'

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
 * @param {Array} props.reviews - 리뷰 목록
 * @param {Array} props.scores - 평점 분포
 */

export const RestaurantReview = ({ average, totalReviews, reviews, scores }) => {
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
        {
          /* TODO: 필요 시 형식에 맞게 수정. reviews가 빈 배열이라면? */
          reviews.length > 0 ? (
            reviews.map(({ id, createdAt, comment, rating }) => (
              <ReviewItem
                key={id}
                date={formatDateTime(createdAt)}
                content={comment}
                rating={rating}
              />
            ))
          ) : (
            <p>아직 작성된 리뷰가 없습니다.</p>
          )
        }
      </div>

      <FloatingButton to={`/restaurant/${restaurantId}/review`} />
    </>
  )
}
