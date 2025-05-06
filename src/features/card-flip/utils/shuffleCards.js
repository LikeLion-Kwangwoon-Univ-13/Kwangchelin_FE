export const generateShuffledCards = (peopleCount, loserCount) => {
  const cards = Array(peopleCount).fill('pass')

  for (let i = 0; i < loserCount; i++) {
    cards[i] = 'lose'
  }

  return cards
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => ({
      type: value,
      isFlipped: false,
    }))
}
