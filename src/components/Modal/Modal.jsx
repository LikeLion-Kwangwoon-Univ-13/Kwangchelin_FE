import { createPortal } from 'react-dom'

import { Icon } from '@/components'

import styles from './Modal.module.css'

/**
 * 오버레이와 닫기 버튼이 포함된 포털 기반 모달 컴포넌트
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - 모달이 열려 있는지 여부
 * @param {() => void} props.onClose - 모달 닫기 핸들러
 * @param {React.ReactNode} props.children - 모달 내부에 렌더링할 콘텐츠
 * @returns {JSX.Element | null}
 */

export const Modal = ({ isOpen, onClose, children }) => {
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
