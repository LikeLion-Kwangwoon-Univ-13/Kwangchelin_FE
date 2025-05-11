import clsx from 'clsx'

import { MainLayout } from '@/components'
import { useCardFlipGame } from '@/features/card-flip/domain/context'

import styles from './CardFlipGameContent.module.css'
import { CardGrid } from './CardGrid'

export const CardFlipGameContent = () => {
  const { remainedLosers } = useCardFlipGame()

  const isRemainLosers = remainedLosers > 0

  return (
    <MainLayout title='카드 뒤집기'>
      <div className={styles.container}>
        <p className={clsx(styles.description, isRemainLosers && styles.remainedLosers)}>
          {isRemainLosers ? `꽝 ${remainedLosers}개 남았어요!` : '모든 카드가 공개되었어요!'}
        </p>

        <CardGrid />
      </div>
    </MainLayout>
  )
}
