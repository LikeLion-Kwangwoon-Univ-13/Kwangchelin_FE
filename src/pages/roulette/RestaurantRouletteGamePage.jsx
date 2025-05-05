import { useLocation, useNavigate } from 'react-router'

import { MainLayout } from '@/components/MainLayout/MainLayout'
import { RestaurantRouletteBoard } from '@/features/roulette/ui'

import styles from './RestaurantRouletteGamePage.module.css'

export const RestaurantRouletteGamePage = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const selectedCategory = state?.selectedCategory

  if (!selectedCategory) {
    navigate('/roulette/restaurant')
    return null
  }

  return (
    <MainLayout title={'식당 룰렛'} hasBackgroundColor>
      <div>
        <h3 className={styles.title}>{selectedCategory} 랜덤 룰렛을 시작합니다!</h3>
        <p className={styles.description}>
          시작하기 버튼을 누르면 {selectedCategory} 매장이 랜덤으로 선택됩니다.
        </p>
      </div>

      <RestaurantRouletteBoard />
    </MainLayout>
  )
}
