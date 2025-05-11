import { useNavigate } from 'react-router'

import { Icon } from '@/components/Icon/Icon'
import { Modal } from '@/components/Modal/Modal'

import styles from './ReviewSuccessModal.module.css'

/**
 * 리뷰 작성 완료 후 표시되는 성공 알림 모달
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - 모달 오픈 여부
 * @param {() => void} props.onClose - 모달 닫기 핸들러
 * @returns {JSX.Element}
 */

export const ReviewSuccessModal = ({ isOpen, onClose }) => {
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
        <p className={styles.description}>
          소중한 후기가 등록되었어요.
          <br />
          감사합니다
        </p>
      </div>
    </Modal>
  )
}
