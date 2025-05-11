import { useNavigate } from 'react-router'

import { Button, MainLayout, RouletteCategoryTagList } from '@/components'
import { getFilteredRestaurants } from '@/mock'

import { useRestaurantRoulette } from '../domain/context/RestaurantRouletteContext'
import styles from './RestaurantRouletteSelectPage.module.css'

export const RestaurantRouletteSelectPage = () => {
  const navigate = useNavigate()

  const { selectedCategory, setSelectedCategory, setRestaurantList } = useRestaurantRoulette()

  const handleStart = () => {
    navigate('/roulette/restaurant/game')
  }

  const handleClickCategoryTag = (category) => {
    const restaurantNameList = getFilteredRestaurants(category).map((item) => item.name)

    setSelectedCategory(category)
    setRestaurantList(restaurantNameList)
  }

  return (
    <MainLayout title={'식당 룰렛'}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.label}>카테고리를 선택해주세요</p>

          <RouletteCategoryTagList
            selectedCategory={selectedCategory}
            onSelect={handleClickCategoryTag}
          />
        </div>

        <Button
          variant='secondary'
          size='lg'
          className={styles.button}
          disabled={!selectedCategory}
          onClick={handleStart}
        >
          시작하기
        </Button>
      </div>
    </MainLayout>
  )
}
