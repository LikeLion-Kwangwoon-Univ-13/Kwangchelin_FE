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
  return array
    .map((item) => ({ sort: Math.random(), value: item }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value)
}
