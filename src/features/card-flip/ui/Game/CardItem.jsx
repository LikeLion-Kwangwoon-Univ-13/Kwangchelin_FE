import clsx from 'clsx'

import { Icon } from '@/components/Icon/Icon'

import styles from './CardItem.module.css'

export const CardItem = ({ type, isFlipped, onClick }) => {
  const isLose = type === 'lose'

  return (
    <button onClick={onClick} disabled={isFlipped} className={styles.card}>
      <div className={clsx(styles.cardInner, isFlipped && styles.flipped)}>
        <div className={clsx(styles.cardFace, styles.cardFront)}>
          <Icon name={'card-background'} size={70} />
        </div>

        <div className={clsx(styles.cardFace, styles.cardBack)}>
          {isLose ? (
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
}
