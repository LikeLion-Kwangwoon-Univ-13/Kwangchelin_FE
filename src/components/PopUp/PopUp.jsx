import { createPortal } from 'react-dom'

import { Icon } from '../Icon/Icon'
import styles from './Popup.module.css'

export const PopUp = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const popupContent = (
    <div
      className={styles.overlay}
      role='button'
      tabIndex={0}
      onClick={handleOverlayClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClose()
        }
      }}
    >
      <div className={styles.container}>
        <button className={styles.buttonClose} onClick={onClose}>
          <Icon name={'shape-close'} size={17} />
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )

  return createPortal(popupContent, document.body)
}
