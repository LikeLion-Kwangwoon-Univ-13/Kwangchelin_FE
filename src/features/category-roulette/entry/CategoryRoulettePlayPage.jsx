import { Icon } from '@/components/Icon/Icon'
import { MainLayout } from '@/components/MainLayout/MainLayout'
import { useCategoryRouletteSpin } from '@/features/category-roulette/domain/hooks'
import {
  CategoryRouletteBoard,
  CategoryRouletteResultModal,
  CategoryRouletteStartButton,
} from '@/features/category-roulette/ui'

import styles from './CategoryRoulettePlayPage.module.css'

export const CategoryRoulettePlayPage = () => {
  const {
    categories,
    resultCategory,
    isOpen,
    mustSpin,
    prizeIndex,
    isSpinning,
    startSpin,
    stopSpin,
    closeModal,
  } = useCategoryRouletteSpin()

  return (
    <MainLayout title='카테고리 룰렛' hasBackgroundColor>
      <div className={styles.container}>
        <div className={styles.content}>
          <Icon name='roulette-pointer' size={66} className={styles.pointer} />
          <CategoryRouletteBoard
            categories={categories}
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
