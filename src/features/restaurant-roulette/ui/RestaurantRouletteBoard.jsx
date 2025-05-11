import { useEffect } from 'react'

import { useRestaurantRoulette } from '../domain/context/RestaurantRouletteContext'
import { useRouletteSpin } from '../domain/hooks/useRouletteSpin'
import styles from './RestaurantRouletteBoard.module.css'

/**
 * 식당 이름을 룰렛 애니메이션으로 보여주는 컴포넌트
 *
 * @param {Object} props
 * @param {string[]} props.restaurantList - 룰렛에 표시할 식당 리스트
 * @param {() => void} props.onSelect - 룰렛 종료 후 선택된 식당 콜백
 * @param {boolean} props.restartKey - 재시작 트리거
 */

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
