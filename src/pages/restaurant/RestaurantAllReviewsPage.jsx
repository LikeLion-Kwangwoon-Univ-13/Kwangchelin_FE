import { useState } from 'react'
import { useParams } from 'react-router'

import { FloatingButton } from '@/components/Button/FloatingButton'
import { Dropdown } from '@/components/DropDown'
import { MainLayout } from '@/components/MainLayout/MainLayout'
import { ReviewItem } from '@/components/ReviewItem'
import { REVIEW_DUMMY_DATA } from '@/mock'

import styles from './RestaurantAllReviewsPage.module.css'

const sortOptions = ['평점순', '리뷰순', '조회순']

export const RestaurantAllReviewsPage = () => {
  const { restaurantId } = useParams()

  const [selected, setSelected] = useState(sortOptions[0])

  return (
    <MainLayout title={'리뷰'}>
      <Dropdown
        options={sortOptions}
        selected={selected}
        onSelect={setSelected}
        className={styles.dropdown}
      />
      <div>
        {REVIEW_DUMMY_DATA.map(({ id, nickname, date, content, rating }) => (
          <ReviewItem key={id} nickname={nickname} date={date} content={content} rating={rating} />
        ))}
      </div>
      <FloatingButton to={`/restaurant/${restaurantId}/review`} />
    </MainLayout>
  )
}
