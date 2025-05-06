import clsx from 'clsx'

import { Icon } from '@/components/Icon/Icon'

import styles from './CardGrid.module.css'

export const CardGrid = ({ cards, onFlip, peopleCount, remainedLosers, openModal }) => {
  const getGridClass = () => {
    if (peopleCount === 2) return styles.gridTwo
    if (peopleCount === 3) return styles.gridThree
    if (peopleCount >= 4 && peopleCount <= 6) return styles.gridSix
    return styles.gridMany
  }

  const handleCardClick = (index, isLoseCard) => {
    onFlip(index)
    if (isLoseCard && remainedLosers > 1) {
      openModal()
    }
  }

  return (
    <div className={getGridClass()}>
      {cards.map((card, index) => {
        const isLoseCard = card.type === 'lose'

        return (
          <button
            key={index}
            onClick={() => handleCardClick(index, isLoseCard)}
            disabled={card.isFlipped}
            className={styles.card}
          >
            <div className={clsx(styles.cardInner, card.isFlipped ? styles.flipped : '')}>
              <div className={`${styles.cardFace} ${styles.cardFront}`}>
                <Icon name={'card-background'} size={70} />
              </div>
              <div className={`${styles.cardFace} ${styles.cardBack}`}>
                {isLoseCard ? (
                  <div className={styles.loseCard}>
                    <Icon name={'card-losing-ticket'} size={40} />
                    <span>꽝</span>
                  </div>
                ) : (
                  <Icon name={'card-pass'} size={40} />
                )}
              </div>
            </div>
          </button>
        )
      })}
    </div>
  )
}
