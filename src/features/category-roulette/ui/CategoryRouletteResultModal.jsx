import { useNavigate } from 'react-router'

import { Button, Icon, Modal } from '@/components'
import { useRestaurantRoulette } from '@/features/restaurant-roulette/domain/context/RestaurantRouletteContext'

import styles from './CategoryRouletteResultModal.module.css'

/**
 * 룰렛 결과 모달
 *
 * - 선택된 카테고리 출력 및 다음 동작 선택 (식당 보기 / 식당 룰렛)
 *
 * @param {Object} props
 * @param {string} props.category - 당첨된 카테고리
 * @param {boolean} props.isOpen - 모달 열림 여부
 * @param {() => void} props.onClose - 닫기 핸들러
 */

export const CategoryRouletteResultModal = ({ category, isOpen, onClose }) => {
  const navigate = useNavigate()
  const { setResultRestaurant } = useRestaurantRoulette()

  const handleGoRestaurantList = () => {
    onClose()
    navigate(`/restaurant/list?category=${category}`, { replace: true })
  }

  const handleGoRoulette = () => {
    onClose()
    setResultRestaurant(category)
    navigate('/roulette/restaurant', { replace: true })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <Icon name={'pop-up-roulette'} size={70} />

        <p className={styles.label}>{category} 당첨!</p>
        <p className={styles.description}>{`이제 어떤 식당을 갈 지\n정해볼까요?`}</p>
        <div className={styles.buttonContainer}>
          <Button variant='primary' size='md' onClick={handleGoRestaurantList}>
            식당 보러가기
          </Button>
          <Button variant='secondary' size='md' onClick={handleGoRoulette}>
            식당 룰렛
          </Button>
        </div>
      </div>
    </Modal>
  )
}
