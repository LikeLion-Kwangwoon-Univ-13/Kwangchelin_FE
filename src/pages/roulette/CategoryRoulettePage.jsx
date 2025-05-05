import { useState } from 'react'
import { useNavigate } from 'react-router'

import { Button } from '@/components/Button/Button'
import { MainLayout } from '@/components/MainLayout/MainLayout'
import { CategoryTag } from '@/components/Tag/CategoryTag'
import { CATEGORY_LIST } from '@/constants/category'

import styles from './CategoryRoulettePage.module.css'

export const CategoryRoulettePage = () => {
  const navigate = useNavigate()
  const [selectedCategories, setSelectedCategories] = useState([])

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category],
    )
  }

  const handleStart = () => {
    if (selectedCategories.length === 0) {
      return
    }

    navigate('/roulette/category/game', { state: { selectedCategories } })
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
                selected={selectedCategories.includes(category)}
                onClick={() => handleCategoryToggle(category)}
              />
            ))}
          </div>
        </div>

        <Button
          variant='secondary'
          size={'lg'}
          className={styles.button}
          disabled={selectedCategories.length === 0}
          onClick={handleStart}
        >
          시작하기
        </Button>
      </div>
    </MainLayout>
  )
}
