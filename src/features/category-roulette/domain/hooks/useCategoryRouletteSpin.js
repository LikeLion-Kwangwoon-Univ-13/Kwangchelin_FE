import { useState } from 'react'

import { useModal } from '@/hooks/useModal'

import { useCategoryRoulette } from '../context'

const getRandomIndex = (length) => Math.floor(Math.random() * length)

export const useCategoryRouletteSpin = () => {
  const { selectedCategoryList } = useCategoryRoulette()

  const { isOpen, openModal, closeModal } = useModal()

  const [mustSpin, setMustSpin] = useState(false)
  const [prizeIndex, setPrizeIndex] = useState(0)
  const [resultCategory, setResultCategory] = useState(null)
  const [isSpinning, setIsSpinning] = useState(false)

  const startSpin = () => {
    if (isSpinning || selectedCategoryList.length === 0) return

    const randomIndex = getRandomIndex(selectedCategoryList.length)
    setPrizeIndex(randomIndex)
    setMustSpin(true)
    setIsSpinning(true)
  }

  const stopSpin = () => {
    setMustSpin(false)
    setResultCategory(selectedCategoryList[prizeIndex])
    setIsSpinning(false)
    openModal()
  }

  return {
    resultCategory,
    isOpen,
    mustSpin,
    prizeIndex,
    isSpinning,
    startSpin,
    stopSpin,
    closeModal,
  }
}
