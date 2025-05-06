import { useState } from 'react'

import { CategoryFilterTagList } from '@/components/CategoryFilterTagList'
import { MainLayout } from '@/components/MainLayout/MainLayout'
import { RestaurantList } from '@/features/restaurant/ui/RestaurantList'

import styles from './RestaurantListPage.module.css'

export const RestaurantListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategoryClick = (category) => {
    setSelectedCategory((prev) => (prev === category ? null : category))
  }

  return (
    <MainLayout title='주변 맛집' hasSearch>
      <div className={styles.container}>
        <CategoryFilterTagList
          selectedCategory={selectedCategory}
          onClickCategory={handleCategoryClick}
        />

        <RestaurantList selectedCategory={selectedCategory} />
      </div>
    </MainLayout>
  )
}
