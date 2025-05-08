import { useNavigate } from 'react-router'

import { Button } from '@/components/Button/Button'
import { CategoryTagList } from '@/components/CategoryTagList'
import { MainLayout } from '@/components/MainLayout/MainLayout'

import { useRestaurantRoulette } from '../domain/context'
import styles from './RestaurantRouletteSelectPage.module.css'

const RestaurantRouletteSelectPageContent = () => {
  const navigate = useNavigate()
  const { selectedCategory, setSelectedCategory } = useRestaurantRoulette()

  const handleStart = () => {
    navigate('/roulette/restaurant/game')
  }

  return (
    <MainLayout title={'식당 룰렛'} hasBackgroundColor>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.label}>카테고리를 선택해주세요</p>

          <CategoryTagList selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
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

export const RestaurantRouletteSelectPage = () => (
  <>
    <RestaurantRouletteSelectPageContent />
  </>
)
