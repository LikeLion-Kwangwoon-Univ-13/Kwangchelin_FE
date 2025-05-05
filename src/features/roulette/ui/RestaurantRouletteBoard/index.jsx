import { useModal } from '@/hooks/useModal'

import { useSlotRoulette } from '../../hook/useSlotRoulette'
import { RestaurantRouletteResultPopUp } from '../RestaurantRouletteResultPopUp'
import styles from './RestaurantRouletteBoard.module.css'

export const RestaurantRouletteBoard = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const { items, isRolling, start, selectedItem, wrappedPosition } = useSlotRoulette(openModal)

  return (
    <div className={styles.container}>
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
            items.map((item, i) => (
              <div key={`${idx}-${i}`} className={styles.item}>
                {item}
              </div>
            )),
          )}
      </div>

      <button onClick={start} style={{ position: 'absolute', bottom: '30px' }}>
        START
      </button>

      <RestaurantRouletteResultPopUp
        restaurant={selectedItem}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </div>
  )
}
