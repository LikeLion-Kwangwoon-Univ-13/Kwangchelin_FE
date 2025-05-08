import { Link, useNavigate } from 'react-router'

import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { Modal } from '@/components/Modal/Modal'

import { useRestaurantRoulette } from '../../domain/context'
import styles from './RestaurantRouletteResultModal.module.css'

export const RestaurantRouletteResultModal = ({ isOpen, onRetry }) => {
  const navigate = useNavigate()

  const { resultRestaurant } = useRestaurantRoulette()

  const handleClose = () => {
    navigate(-1, { replace: true })
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className={styles.container}>
        <Icon name={'pop-up-roulette'} size={70} />

        <p className={styles.label}>{resultRestaurant} 당첨!</p>
        <p className={styles.description}>{'맛있는 식사 시간 되세요!'}</p>
        <Link to={`/restaurant/list/category=${resultRestaurant}`} className={styles.link}>
          <p>상세정보 보러가기</p>
          <Icon name={'shape-arrow-right'} size={13} fill={'#7A7A7A'} />
        </Link>

        <Button variant='primary' size='md' onClick={onRetry} className={styles.button}>
          다시 하기
        </Button>
      </div>
    </Modal>
  )
}
