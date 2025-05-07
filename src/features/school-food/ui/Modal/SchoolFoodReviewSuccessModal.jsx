import { useNavigate } from 'react-router'

import { Icon } from '@/components/Icon/Icon'
import { Modal } from '@/components/Modal/Modal'

import styles from './SchoolFoodReviewSuccessModal.module.css'

export const SchoolFoodReviewSuccessModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate()

  const handleModalClose = () => {
    onClose()
    navigate(-1)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose}>
      <div className={styles.container}>
        <Icon name={'pop-up-review'} size={70} />
        <p className={styles.label}>등록 완료!</p>
        <p className={styles.description}>{`소중한 후기가 등록되었어요.\n감사합니다`}</p>
      </div>
    </Modal>
  )
}
