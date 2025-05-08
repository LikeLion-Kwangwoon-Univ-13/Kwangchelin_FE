import { useState } from 'react'

import { CategoryFilterTagList } from '@/components/CategoryFilterTagList'
import { Dropdown } from '@/components/DropDown'
import { MainLayout } from '@/components/MainLayout/MainLayout'
import { CATEGORY_LIST } from '@/constants/category'
import { RestaurantItem } from '@/features/kwangwoon-pick/ui/RestaurantItem'
import { getRestaurantsByCategory } from '@/mock/restaurantUtils'

import styles from './KwangwoonPickPage.module.css'

const sortOptions = ['평점순', '리뷰순', '조회순']

export const KwangwoonPickPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const [selected, setSelected] = useState(sortOptions[0])

  const restaurants = getRestaurantsByCategory(selectedCategory)

  const handleCategoryClick = (category) => {
    setSelectedCategory((prev) => (prev === category ? null : category))
  }

  return (
    <MainLayout title={'광운PICK 맛집'}>
      <div className={styles.container}>
        <CategoryFilterTagList
          categoryList={['전체', ...CATEGORY_LIST]}
          selectedCategory={selectedCategory}
          onClickCategory={handleCategoryClick}
        />

        <Dropdown
          options={sortOptions}
          selected={selected}
          onSelect={setSelected}
          className={styles.dropdown}
        />

        {restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.location_id} restaurant={restaurant} />
        ))}
      </div>
    </MainLayout>
  )
}
