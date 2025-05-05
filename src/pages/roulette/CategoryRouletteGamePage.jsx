import { useState } from 'react'
import { useLocation } from 'react-router'

import { Icon } from '@/components/Icon/Icon'
import { MainLayout } from '@/components/MainLayout/MainLayout'
import { RouletteBoard, RouletteStartButton } from '@/features/roulette/ui'
import { CategoryRouletteResultPopUp } from '@/features/roulette/ui/CategoryRouletteResultPopUp'
import { useModal } from '@/hooks/useModal'

import styles from './CategoryRouletteGamePage.module.css'

const getRandomIndex = (length) => Math.floor(Math.random() * length)

export const CategoryRouletteGamePage = () => {
  const { state } = useLocation()
  const selectedCategories = state?.selectedCategories || []

  const { isOpen, openModal, closeModal } = useModal()

  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [result, setResult] = useState(null)

  const handleRouletteStart = () => {
    if (isButtonDisabled || selectedCategories.length === 0) return

    setIsButtonDisabled(true)

    const randomIndex = getRandomIndex(selectedCategories.length)
    setPrizeNumber(randomIndex)

    setMustSpin(true)
  }

  const handleStopSpinning = () => {
    setMustSpin(false)
    setResult(selectedCategories[prizeNumber])
    setIsButtonDisabled(false)
    openModal()
  }

  return (
    <MainLayout title='랜덤 룰렛' hasBackgroundColor>
      <div className={styles.container}>
        <div className={styles.content}>
          <Icon name={'roulette-pointer'} size={66} className={styles.pointer} />

          <RouletteBoard
            categories={selectedCategories}
            prizeNumber={prizeNumber}
            mustSpin={mustSpin}
            onStopSpinning={handleStopSpinning}
          />

          <RouletteStartButton onClick={handleRouletteStart} disabled={isButtonDisabled} />
        </div>
      </div>
      <CategoryRouletteResultPopUp category={result} isOpen={isOpen} closeModal={closeModal} />
    </MainLayout>
  )
}
