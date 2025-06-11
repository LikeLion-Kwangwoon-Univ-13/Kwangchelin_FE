import { useRef, useState } from 'react'
import { useParams } from 'react-router'

import { Dropdown, FloatingButton, MainLayout, ReviewItem } from '@/components'
import { useIntersectionObserver } from '@/hooks'

import { useFetchAllRestaurantReviews } from '../hooks/useFetchAllRestaurantReviews'
import styles from './RestaurantAllReviewsPage.module.css'

const SORT_OPTIONS = ['최신순', '평점순']

export const RestaurantAllReviewsPage = () => {
  const observerRef = useRef(null)
  const { restaurantId } = useParams()

  const [selectedDropDown, setSelectedDropDown] = useState(SORT_OPTIONS[0])

  const { reviewList, loadNextPage, enabled, isError, isLoading } = useFetchAllRestaurantReviews({
    placeId: restaurantId,
    sortBy: SORT_OPTIONS.indexOf(selectedDropDown),
  })

  const handleDropDownClick = (index) => {
    setSelectedDropDown(index)
  }

  useIntersectionObserver(observerRef, loadNextPage, enabled)

  // TODO: 로딩 중일 때 처리

  // TODO: 오류 발생 시 처리

  // TODO: 데이터가 없을 때 처리

  return (
    <MainLayout title={'리뷰'}>
      <Dropdown
        options={SORT_OPTIONS}
        selected={selectedDropDown}
        onSelect={handleDropDownClick}
        className={styles.dropdown}
      />
      <div>
        {/* TODO: reviewList의 데이터 형식에 맞게 아래 수정 */}
        {reviewList.map(({ id, date, content, rating }) => (
          <ReviewItem key={id} date={date} content={content} rating={rating} />
        ))}
      </div>
      <FloatingButton to={`/restaurant/${restaurantId}/review`} />
    </MainLayout>
  )
}
