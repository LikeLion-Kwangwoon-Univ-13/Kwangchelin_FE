import { Link, useNavigate } from 'react-router'

import { Button, Icon, Modal } from '@/components'
import { RESTAURANT_DUMMY_DATA } from '@/mock'

import { useRestaurantRoulette } from '../domain/context/RestaurantRouletteContext'
import styles from './RestaurantRouletteResultModal.module.css'

/**
 * 룰렛 결과로 선택된 식당을 보여주는 모달 컴포넌트
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - 모달 오픈 여부
 * @param {() => void} props.onRetry - 다시 하기 클릭 핸들러
 */

export const RestaurantRouletteResultModal = ({ isOpen, onRetry }) => {
  const navigate = useNavigate()

  const { resultRestaurant } = useRestaurantRoulette()

  const handleClose = () => {
    navigate(-1, { replace: true })
  }

  const restaurantId = RESTAURANT_DUMMY_DATA.find(
    (restaurant) => restaurant.name === resultRestaurant,
  )?.location_id

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className={styles.container}>
        <Icon name={'pop-up-roulette'} size={70} />

        <p className={styles.label}>{resultRestaurant} 당첨!</p>
        <p className={styles.description}>{'맛있는 식사 시간 되세요!'}</p>
        <Link to={`/restaurant/${restaurantId}`} className={styles.link}>
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
