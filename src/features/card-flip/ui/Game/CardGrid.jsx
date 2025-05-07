import { useLocation } from 'react-router'

import { useCardFlipGame } from '@/features/card-flip/domain/context'

import { CardItem } from '../Game/CardItem'
import styles from './CardGrid.module.css'

const getGridClass = (peopleCount) => {
  if (peopleCount === 2) return styles.gridTwo
  if (peopleCount === 3) return styles.gridThree
  if (peopleCount >= 4 && peopleCount <= 6) return styles.gridSix
  return styles.gridMany
}

export const CardGrid = () => {
  const { state } = useLocation()
  const { cards, flipCard } = useCardFlipGame()

  const peopleCount = state?.peopleCount

  const handleCardClick = (index) => {
    flipCard(index)
  }

  return (
    <div className={getGridClass(peopleCount)}>
      {cards.map((card, index) => (
        <CardItem
          key={index}
          type={card.type}
          isFlipped={card.isFlipped}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  )
}
