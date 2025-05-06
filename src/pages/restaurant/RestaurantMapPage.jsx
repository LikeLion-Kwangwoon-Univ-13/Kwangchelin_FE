import { CategoryFilterTagList } from '@/components/CategoryFilterTagList'
import { MainLayout } from '@/components/MainLayout/MainLayout'

import styles from './RestaurantMapPage.module.css'
import { useState } from 'react'
import { RestaurantMap } from '@/features/restaurant/ui/RestaurantMap'
import { YellowButton } from '@/components/Button/YellowButton'

export const RestaurantMapPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategoryClick = (category) => {
    setSelectedCategory((prev) => (prev === category ? null : category))
  }

  return (
    <MainLayout title={'광운대 근처 맛집'} hasBackgroundColor hasSearch>
      <div className={styles.container}>
        <CategoryFilterTagList
          selectedCategory={selectedCategory}
          onClickCategory={handleCategoryClick}
        />

        <RestaurantMap />

        <YellowButton onClick={() => {}} className={styles.button}>
          목록 보기
        </YellowButton>
      </div>
    </MainLayout>
  )
}
