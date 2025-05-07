import { Link } from 'react-router'

import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon/Icon'
import { Modal } from '@/components/Modal/Modal'

import styles from './RestaurantRouletteResultPopUp.module.css'

export const RestaurantRouletteResultPopUp = ({ restaurant, isOpen, onRetry, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <Icon name={'pop-up-roulette'} size={70} />

        <p className={styles.label}>{restaurant} 당첨!</p>
        <p className={styles.description}>{'맛있는 식사 시간 되세요!'}</p>
        <Link to={`/restaurant/list/category=${restaurant}`} className={styles.link}>
          <p>상세정보 보러가기 </p>
          <Icon name={'shape-arrow-right'} size={13} fill={'#7A7A7A'} />
        </Link>

        <Button variant='primary' size='md' onClick={onRetry} className={styles.button}>
          다시 하기
        </Button>
      </div>
    </Modal>
  )
}
