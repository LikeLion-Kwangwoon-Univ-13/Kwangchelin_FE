import { useNavigate } from 'react-router'

import { Icon } from '@/components/Icon/Icon'
import { PopUp } from '@/components/PopUp/PopUp'

import styles from './ReviewSubmitSuccessPopUp.module.css'

export const ReviewSubmitSuccessPopUp = ({ isOpen, closeModal }) => {
  const navigate = useNavigate()

  const handleModalClose = () => {
    closeModal()
    navigate('/school-food', { replace: true })
  }

  return (
    <PopUp isOpen={isOpen} onClose={handleModalClose}>
      <div className={styles.container}>
        <Icon name={'pop-up-review'} size={70} />
        <p className={styles.label}>등록 완료!</p>
        <p className={styles.description}>{`소중한 후기가 등록되었어요.\n감사합니다`}</p>
      </div>
    </PopUp>
  )
}
