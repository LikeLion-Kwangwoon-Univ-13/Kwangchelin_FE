import { useState } from 'react'
import { useNavigate } from 'react-router'

import { Button } from '@/components/Button/Button'
import { MainLayout } from '@/components/MainLayout/MainLayout'
import { CategoryTag } from '@/components/Tag/CategoryTag'
import { CATEGORY_LIST } from '@/constants/category'

import styles from './RestaurantRoulettePage.module.css'

export const RestaurantRoulettePage = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategorySelect = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null)
    } else {
      setSelectedCategory(category)
    }
  }

  const handleStart = () => {
    if (!selectedCategory) return

    navigate('/roulette/restaurant/game', { state: { selectedCategory } })
  }

  return (
    <MainLayout title={'카테고리 선택'} hasBackgroundColor>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.label}>카테고리를 선택해주세요</p>
          <div className={styles.grid}>
            {CATEGORY_LIST.map((category) => (
              <CategoryTag
                key={category}
                variant='roulette'
                label={category}
                selected={selectedCategory === category}
                onClick={() => handleCategorySelect(category)}
              />
            ))}
          </div>
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
