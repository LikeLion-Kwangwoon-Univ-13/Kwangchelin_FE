import { useNavigate } from 'react-router'

import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { Modal } from '@/components/Modal/Modal'

import styles from './FinishPopUp.module.css'

export const FinishPopup = ({ isOpen, onClose, onRetry }) => {
  const navigate = useNavigate()

  const handleModalClose = () => {
    onClose()
    navigate('/card-flip', { replace: true })
  }

  const handleRetryClick = () => {
    onRetry()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose}>
      <div className={styles.container}>
        <Icon name={'pop-up-card'} size={90} />
        <p className={styles.label}>게임 종료!</p>
        <Button size={'md'} className={styles.button} onClick={handleRetryClick}>
          다시 하기
        </Button>
      </div>
    </Modal>
  )
}
