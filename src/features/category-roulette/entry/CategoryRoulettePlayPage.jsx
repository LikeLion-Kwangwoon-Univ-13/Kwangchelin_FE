import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { Icon, MainLayout } from '@/components'
import { useCategoryRouletteSpin } from '@/features/category-roulette/domain/hooks'
import {
  CategoryRouletteBoard,
  CategoryRouletteResultModal,
  CategoryRouletteStartButton,
} from '@/features/category-roulette/ui'

import { useCategoryRoulette } from '../domain/context'
import styles from './CategoryRoulettePlayPage.module.css'

export const CategoryRoulettePlayPage = () => {
  const navigate = useNavigate()
  const { selectedCategoryList, clearCategory } = useCategoryRoulette()

  const {
    resultCategory,
    isOpen,
    mustSpin,
    prizeIndex,
    isSpinning,
    startSpin,
    stopSpin,
    closeModal,
  } = useCategoryRouletteSpin()

  useEffect(() => {
    if (!selectedCategoryList || !selectedCategoryList.length) {
      navigate('/roulette/category', { replace: true })
    }
  }, [selectedCategoryList, navigate])

  useEffect(() => {
    return () => {
      clearCategory()
    }
  }, [])

  if (!selectedCategoryList || !selectedCategoryList.length) return null

  return (
    <MainLayout title='카테고리 룰렛'>
      <div className={styles.container}>
        <div className={styles.content}>
          <Icon name='roulette-pointer' size={66} className={styles.pointer} />
          <CategoryRouletteBoard
            categories={selectedCategoryList}
            prizeNumber={prizeIndex}
            mustSpin={mustSpin}
            onStopSpinning={stopSpin}
          />
          <CategoryRouletteStartButton onClick={startSpin} disabled={isSpinning} />
        </div>
      </div>

      <CategoryRouletteResultModal category={resultCategory} isOpen={isOpen} onClose={closeModal} />
    </MainLayout>
  )
}
