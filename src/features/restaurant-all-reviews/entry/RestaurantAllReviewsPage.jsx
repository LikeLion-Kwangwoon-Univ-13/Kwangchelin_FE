import { useEffect, useRef, useState } from 'react'
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
  const [sortBy, setSortBy] = useState(0)

  const { reviewList, loadNextPage, enabled, isError, isLoading, resetReviews } =
    useFetchAllRestaurantReviews({ placeId: restaurantId, sortBy })

  const handleDropDownClick = (selectedLabel) => {
    const newSortBy = SORT_OPTIONS.indexOf(selectedLabel)
    setSelectedDropDown(selectedLabel)
    setSortBy(newSortBy)
    resetReviews()
  }

  useIntersectionObserver(observerRef, loadNextPage, enabled)

  useEffect(() => {
    loadNextPage()
  }, [sortBy, restaurantId, loadNextPage])

  return (
    <MainLayout title={'리뷰'}>
      <Dropdown
        options={SORT_OPTIONS}
        selected={selectedDropDown}
        onSelect={handleDropDownClick}
        className={styles.dropdown}
      />
      <div className={styles.reviewListContainer}>
        {isLoading && <p className={styles.infoText}>리뷰를 불러오는 중입니다...</p>}
        {isError && <p className={styles.infoText}>리뷰를 불러오는 중 오류가 발생했습니다.</p>}
        {!isLoading && !isError && reviewList.length === 0 && (
          <p className={styles.infoText}>아직 등록된 리뷰가 없습니다.</p>
        )}

        {!isLoading &&
          !isError &&
          reviewList.map(({ id, createdAt, comment, rating }) => (
            <ReviewItem key={id} date={createdAt} content={comment} rating={rating} />
          ))}

        <div ref={observerRef} className={styles.observer} />
      </div>

      <FloatingButton to={`/restaurant/${restaurantId}/review`} />
    </MainLayout>
  )
}
