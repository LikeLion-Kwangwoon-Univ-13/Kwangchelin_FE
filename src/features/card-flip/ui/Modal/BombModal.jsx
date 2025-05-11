import { Icon, Modal } from '@/components'

import { useCardFlipGame } from '../../domain/context'
import styles from './BombModal.module.css'

export const BombModal = () => {
  const { justFlippedCard, clearJustFlippedCard } = useCardFlipGame()

  const isBombModalOpen = justFlippedCard?.type === 'lose'

  const handleClose = () => {
    clearJustFlippedCard()
  }

  return (
    <Modal isOpen={isBombModalOpen} onClose={handleClose}>
      <div className={styles.container}>
        <Icon name={'card-losing-ticket'} size={90} />
        <p className={styles.label}>꽝!</p>
      </div>
    </Modal>
  )
}
