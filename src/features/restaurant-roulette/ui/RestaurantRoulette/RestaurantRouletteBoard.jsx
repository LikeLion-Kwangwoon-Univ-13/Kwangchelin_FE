import { useEffect } from 'react'

import { useRestaurantRoulette } from '../../domain/context'
import { useRouletteSpin } from '../../domain/hooks'
import styles from './RestaurantRouletteBoard.module.css'

export const RestaurantRouletteBoard = ({ restartKey, onSelect }) => {
  const { restaurantList } = useRestaurantRoulette()
  const { isRolling, start, wrappedPosition } = useRouletteSpin({
    items: restaurantList,
    onSelect,
  })

  useEffect(() => {
    start()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restartKey])

  return (
    <div className={styles.container}>
      <div className={styles.slot}>
        <div className={styles.highlight} />
        <div
          style={{
            transform: `translateY(-${wrappedPosition}px)`,
            transition: isRolling ? 'none' : 'transform 0.5s ease-out',
          }}
        >
          {Array(20)
            .fill(null)
            .flatMap((_, idx) =>
              restaurantList.map((item, i) => (
                <div key={`${idx}-${i}`} className={styles.item}>
                  {item}
                </div>
              )),
            )}
        </div>
      </div>
    </div>
  )
}
