import { Icon } from '@/components/Icon/Icon'
import { Modal } from '@/components/Modal/Modal'

import styles from './BombPopUp.module.css'

export const BombPopup = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <Icon name={'card-losing-ticket'} size={90} />
        <p className={styles.label}>꽝!</p>
      </div>
    </Modal>
  )
}
