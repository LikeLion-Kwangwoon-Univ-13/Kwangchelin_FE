import { useNavigate } from 'react-router'

import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { Modal } from '@/components/Modal/Modal'

import { GAME_STATUS } from '../../domain/constants'
import { useCardFlipGame } from '../../domain/context'
import styles from './FinishModal.module.css'

export const FinishModal = () => {
  const navigate = useNavigate()
  const { gameStatus, resetGame } = useCardFlipGame()

  const isOpen = gameStatus === GAME_STATUS.FINISHED

  const handleClose = () => {
    resetGame()
    navigate(-1)
  }

  const handleRetry = () => {
    resetGame()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className={styles.container}>
        <Icon name={'pop-up-card'} size={90} />
        <p className={styles.label}>게임 종료!</p>
        <Button size={'md'} className={styles.button} onClick={handleRetry}>
          다시 하기
        </Button>
      </div>
    </Modal>
  )
}
