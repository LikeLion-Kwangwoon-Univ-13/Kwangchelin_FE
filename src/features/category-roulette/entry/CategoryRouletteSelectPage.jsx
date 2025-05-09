import { useNavigate } from 'react-router'

import { Button } from '@/components/Button/Button'
import { CategoryTagList } from '@/components/CategoryTagList'
import { MainLayout } from '@/components/MainLayout/MainLayout'
import {
  CategoryRouletteProvider,
  useCategoryRoulette,
} from '@/features/category-roulette/domain/context'

import styles from './CategoryRouletteSelectPage.module.css'

const CategoryRouletteSelectPageContent = () => {
  const navigate = useNavigate()
  const { selectedCategoryList, toggleCategory } = useCategoryRoulette()

  const handleStart = () => {
    navigate('/roulette/category/game', { state: { selectedCategoryList } })
  }

  return (
    <MainLayout title={'카테고리 룰렛'}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.label}>카테고리를 선택해주세요</p>

          <CategoryTagList
            selectedCategory={selectedCategoryList}
            onSelect={toggleCategory}
            multiple
          />
        </div>

        <Button
          variant='secondary'
          size='lg'
          className={styles.button}
          disabled={selectedCategoryList.length === 0}
          onClick={handleStart}
        >
          시작하기
        </Button>
      </div>
    </MainLayout>
  )
}

export const CategoryRouletteSelectPage = () => (
  <CategoryRouletteProvider>
    <CategoryRouletteSelectPageContent />
  </CategoryRouletteProvider>
)
