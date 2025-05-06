import clsx from 'clsx'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

import { MainLayout } from '@/components/MainLayout/MainLayout'
import { useCardGame } from '@/features/card-flip/hook'
import { BombPopup, CardGrid } from '@/features/card-flip/ui'
import { FinishPopup } from '@/features/card-flip/ui/FinishPopUp'
import { useModal } from '@/hooks/useModal'

import styles from './CardFlipGamePage.module.css'

export const CardFlipGamePage = () => {
  const navigate = useNavigate()

  const { state } = useLocation()
  const {
    isOpen: isBombModalOpen,
    openModal: openBombModal,
    closeModal: closeBombModal,
  } = useModal()
  const {
    isOpen: isFinishModalOpen,
    openModal: openFinishModal,
    closeModal: closeFinishModal,
  } = useModal()

  const peopleCount = state?.peopleCount
  const loserCount = state?.loserCount

  const { cards, remainedLosers, handleFlip, initializeCards } = useCardGame({
    peopleCount,
    loserCount,
    onEmpty: openFinishModal,
  })

  const handleRetry = () => {
    closeFinishModal()
    initializeCards()
  }

  useEffect(() => {
    const isAllFlipped = cards.length > 0 && cards.every((card) => card.isFlipped)
    if (isAllFlipped) {
      openFinishModal()
    }
  }, [cards, openFinishModal])

  if (!peopleCount || !loserCount) {
    navigate('/card-flip', { replace: true })
    return null
  }

  const isRemainLosers = remainedLosers > 0

  return (
    <>
      <MainLayout title={'카드 뒤집기'} hasBackgroundColor>
        <div className={styles.container}>
          <p className={clsx(styles.description, isRemainLosers && styles.remainedLosers)}>
            {isRemainLosers ? `꽝 ${remainedLosers}개 남았어요!` : '모든 카드가 공개되었어요!'}
          </p>

          <CardGrid
            cards={cards}
            onFlip={handleFlip}
            peopleCount={peopleCount}
            remainedLosers={remainedLosers}
            openModal={openBombModal}
          />
        </div>
      </MainLayout>
      <BombPopup isOpen={isBombModalOpen} onClose={closeBombModal} />
      <FinishPopup isOpen={isFinishModalOpen} onClose={closeFinishModal} onRetry={handleRetry} />
    </>
  )
}
