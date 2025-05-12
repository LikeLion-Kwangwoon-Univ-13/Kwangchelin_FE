import { fetchSchoolFoodReviewList } from '../domain/api/fetchSchoolFoodReview'
import styles from './SchoolFoodReviewList.module.css'

/**
 * 학식 리뷰 목록을 보여주는 컴포넌트
 *
 * - fetchSchoolFoodReviewList()를 통해 리뷰 데이터를 가져옵니다.
 * - 가져온 reviewList를 map을 사용해 ReviewItem 컴포넌트로 렌더링합니다.
 */

export const SchoolFoodReviewList = () => {
  const reviewList = fetchSchoolFoodReviewList()

  return (
    <div className={styles.container}>
      {/*
        TODO: reviewList에 담긴 리뷰 데이터를 화면에 출력해 보세요.
        reviewList에는 여러 개의 리뷰 객체가 배열 형태로 들어 있습니다.
        각 리뷰를 반복적으로 보여주려면 어떻게 해야 할까요?
      */}
    </div>
  )
}
