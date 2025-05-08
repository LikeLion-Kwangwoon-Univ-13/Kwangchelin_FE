import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { MainLayout } from '@/components/MainLayout/MainLayout'
import { useRestaurantRoulette } from '@/features/restaurant-roulette/domain/context'
import {
  RestaurantRouletteBoard,
  RestaurantRouletteResultModal,
} from '@/features/restaurant-roulette/ui'
import { useModal } from '@/hooks/useModal'

import styles from './RestaurantRoulettePlayPage.module.css'
export const RestaurantRoulettePlayPage = () => {
  const navigate = useNavigate()

  const [restartKey, setRestartKey] = useState(false)

  const { isOpen, openModal, closeModal } = useModal()
  const { selectedCategory, setResultRestaurant } = useRestaurantRoulette()

  useEffect(() => {
    if (!selectedCategory) {
      navigate('/roulette/restaurant')
    }
  }, [selectedCategory, navigate])

  const handleSelectRestaurant = (restaurant) => {
    setResultRestaurant(restaurant)
    openModal()
  }

  const handleRetry = () => {
    setResultRestaurant(null)
    closeModal()
    setRestartKey((prev) => !prev)
  }

  if (!selectedCategory) return null

  return (
    <MainLayout title='식당 룰렛' hasBackgroundColor>
      <div className={styles.container}>
        <h3 className={styles.title}>{selectedCategory} 랜덤 룰렛을 시작합니다!</h3>

        <RestaurantRouletteBoard onSelect={handleSelectRestaurant} restartKey={restartKey} />
        <RestaurantRouletteResultModal isOpen={isOpen} onRetry={handleRetry} />
      </div>
    </MainLayout>
  )
}
