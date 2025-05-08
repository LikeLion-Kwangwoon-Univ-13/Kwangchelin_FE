import { useState } from 'react'
import { useLocation } from 'react-router'

import { useModal } from '@/hooks/useModal'

const getRandomIndex = (length) => Math.floor(Math.random() * length)

export const useCategoryRouletteSpin = () => {
  const { state } = useLocation()
  const categories = state?.selectedCategoryList ?? []

  const { isOpen, openModal, closeModal } = useModal()

  const [mustSpin, setMustSpin] = useState(false)
  const [prizeIndex, setPrizeIndex] = useState(0)
  const [resultCategory, setResultCategory] = useState(null)
  const [isSpinning, setIsSpinning] = useState(false)

  const startSpin = () => {
    if (isSpinning || categories.length === 0) return

    const randomIndex = getRandomIndex(categories.length)
    setPrizeIndex(randomIndex)
    setMustSpin(true)
    setIsSpinning(true)
  }

  const stopSpin = () => {
    setMustSpin(false)
    setResultCategory(categories[prizeIndex])
    setIsSpinning(false)
    openModal()
  }

  return {
    categories,
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
