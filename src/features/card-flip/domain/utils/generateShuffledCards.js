import { CARD_STATUS } from '@/features/card-flip/domain/constants'

export const generateShuffledCards = (peopleCount, loserCount) => {
  const cards = []

  for (let i = 0; i < loserCount; i++) {
    cards.push({
      id: i,
      type: CARD_STATUS.LOSE,
      isFlipped: false,
    })
  }

  for (let i = loserCount; i < peopleCount; i++) {
    cards.push({
      id: i,
      type: CARD_STATUS.PASS,
      isFlipped: false,
    })
  }

  return shuffle(cards)
}

const shuffle = (array) => {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}
