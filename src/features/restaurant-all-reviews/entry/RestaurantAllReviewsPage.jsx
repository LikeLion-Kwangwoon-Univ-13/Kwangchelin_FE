import { useState } from 'react'
import { useParams } from 'react-router'

import { Dropdown, FloatingButton, MainLayout, ReviewItem } from '@/components'
import { getSortedReviews, REVIEW_DUMMY_DATA } from '@/mock'

import styles from './RestaurantAllReviewsPage.module.css'

const SORT_OPTIONS = ['최신순', '평점순']

export const RestaurantAllReviewsPage = () => {
  const { restaurantId } = useParams()

  const [selected, setSelected] = useState(SORT_OPTIONS[0])
  const [sortedReviews, setSortedReviews] = useState(REVIEW_DUMMY_DATA)

  const handleDropDownClick = (option) => {
    setSelected(option)
    setSortedReviews(
      getSortedReviews(REVIEW_DUMMY_DATA, option === SORT_OPTIONS[0] ? 'latest' : 'rating'),
    )
  }

  return (
    <MainLayout title={'리뷰'}>
      <Dropdown
        options={SORT_OPTIONS}
        selected={selected}
        onSelect={handleDropDownClick}
        className={styles.dropdown}
      />
      <div>
        {sortedReviews.map(({ id, nickname, date, content, rating }) => (
          <ReviewItem key={id} nickname={nickname} date={date} content={content} rating={rating} />
        ))}
      </div>
      <FloatingButton to={`/restaurant/${restaurantId}/review`} />
    </MainLayout>
  )
}
