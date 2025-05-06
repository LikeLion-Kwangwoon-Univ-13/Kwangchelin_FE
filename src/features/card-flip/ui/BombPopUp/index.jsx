import { Icon } from '@/components/Icon/Icon'
import { PopUp } from '@/components/PopUp/PopUp'

import styles from './BombPopUp.module.css'

export const BombPopup = ({ isOpen, onClose }) => {
  return (
    <PopUp isOpen={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <Icon name={'card-losing-ticket'} size={90} />
        <p className={styles.label}>꽝!</p>
      </div>
    </PopUp>
  )
}
