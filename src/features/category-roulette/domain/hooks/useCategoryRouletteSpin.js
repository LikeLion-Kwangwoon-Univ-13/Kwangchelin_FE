import { useState } from 'react'

import { useModal } from '@/hooks/useModal'

import { useCategoryRoulette } from '../context/CategoryRouletteContext'

const getRandomIndex = (length) => Math.floor(Math.random() * length)

/**
 * 카테고리 룰렛 상태 접근용 커스텀 훅
 *
 * - Provider 외부에서 사용 시 에러 throw
 *
 * @returns {{ selectedCategoryList: string[], toggleCategory: Function, clearCategory: Function }}
 */

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
