import { useCallback, useEffect, useState } from 'react'

import { generateShuffledCards } from '../utils/shuffleCards'

export const useCardGame = ({ peopleCount, loserCount, onEmpty }) => {
  const [cards, setCards] = useState([])

  const initializeCards = useCallback(() => {
    setCards(generateShuffledCards(peopleCount, loserCount))
  }, [loserCount, peopleCount])

  const handleFlip = (index) => {
    setCards((prev) => {
      const next = prev.map((card, i) => (i === index ? { ...card, isFlipped: true } : card))
      const remaining = next.filter((card) => card.type === 'lose' && !card.isFlipped).length

      if (remaining === 0 && onEmpty) {
        onEmpty()
      }

      return next
    })
  }

  useEffect(() => {
    if (!peopleCount || !loserCount) return
    initializeCards()
  }, [peopleCount, loserCount, initializeCards])

  const remainedLosers = cards.filter((card) => card.type === 'lose' && !card.isFlipped).length

  return {
    cards,
    remainedLosers,
    handleFlip,
    initializeCards,
  }
}
