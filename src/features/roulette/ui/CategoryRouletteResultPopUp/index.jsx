import { useNavigate } from 'react-router'

import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { Modal } from '@/components/Modal/Modal'

import styles from './CategoryRouletteResultPopUp.module.css'

export const CategoryRouletteResultPopUp = ({ category, isOpen, closeModal }) => {
  const navigate = useNavigate()

  const handleModalClose = () => {
    closeModal()
  }

  const handleGoRestaurantList = () => {
    closeModal()
    navigate(`/restaurant/list/category=${category}`)
  }

  const handleGoRoulette = () => {
    closeModal()
    navigate('/roulette/restaurant')
  }

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose}>
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
