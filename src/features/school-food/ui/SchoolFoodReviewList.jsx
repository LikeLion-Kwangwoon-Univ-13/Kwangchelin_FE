import { useRef } from 'react'

import { ReviewItem } from '@/components'
import { useIntersectionObserver } from '@/hooks'

import { useFetchReviewList } from '../hooks/useFetchReviewList'
import styles from './SchoolFoodReviewList.module.css'

/**
 * 학식 리뷰 목록을 보여주는 컴포넌트
 */

export const SchoolFoodReviewList = () => {
  const observerRef = useRef(null)

  // 실제 데이터로 불러오기
  const { reviewList, loadNextPage, enabled, isError, isLoading } = useFetchReviewList()

  useIntersectionObserver(observerRef, loadNextPage, enabled)

  // TODO: 데이터 로딩 중 보여줄 화면

  // TODO: 오류 발생 시 보여줄 화면

  // TODO: 리스트가 없을 때 보여줄 화면

  return (
    <div className={styles.container}>
      {reviewList.map((review, index) => (
        <ReviewItem
          key={index}
          nickname={review.nickname}
          date={review.date}
          content={review.content}
          rating={review.rating}
        />
      ))}
      {enabled && <div ref={observerRef} style={{ height: 1 }} />}
    </div>
  )
}
