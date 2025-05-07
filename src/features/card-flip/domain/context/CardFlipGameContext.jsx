import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { GAME_STATUS } from '@/features/card-flip/domain/constants'
import { generateShuffledCards } from '@/features/card-flip/domain/utils'

const CardFlipGameContext = createContext()

export const CardFlipGameProvider = ({ peopleCount, loserCount, children }) => {
  const [cards, setCards] = useState(() => generateShuffledCards(peopleCount, loserCount))
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.PLAYING)
  const [justFlippedCard, setJustFlippedCard] = useState(null)

  const remainedLosers = useMemo(() => {
    return cards.filter((card) => card.type === 'lose' && !card.isFlipped).length
  }, [cards])

  const flipCard = (index) => {
    setCards((prevCards) => {
      const newCards = [...prevCards]
      const updatedCard = { ...newCards[index], isFlipped: true }
      newCards[index] = updatedCard

      setJustFlippedCard(updatedCard)

      return newCards
    })
  }

  const resetGame = () => {
    setCards(generateShuffledCards(peopleCount, loserCount))
    setGameStatus(GAME_STATUS.PLAYING)
    setJustFlippedCard(null)
  }

  useEffect(() => {
    const isAllFlipped = cards.length > 0 && cards.every((card) => card.isFlipped)
    const isAllLoseFlipped = remainedLosers === 0

    if ((isAllFlipped || isAllLoseFlipped) && gameStatus !== GAME_STATUS.FINISHED) {
      setGameStatus(GAME_STATUS.FINISHED)
    }
  }, [cards, remainedLosers, gameStatus])

  const clearJustFlippedCard = () => {
    setJustFlippedCard(null)
  }

  return (
    <CardFlipGameContext.Provider
      value={{
        cards,
        remainedLosers,
        gameStatus,
        justFlippedCard,
        flipCard,
        resetGame,
        clearJustFlippedCard,
      }}
    >
      {children}
    </CardFlipGameContext.Provider>
  )
}

export const useCardFlipGame = () => {
  const context = useContext(CardFlipGameContext)
  if (!context) {
    throw new Error('useCardFlipGame은 CardFlipGameProvider 안에서 사용해야 합니다.')
  }
  return context
}
