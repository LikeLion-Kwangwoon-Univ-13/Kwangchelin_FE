import { Link } from 'react-router'

import defaultImage from '@/assets/defaultImage.png'
import { Icon } from '@/components'

import styles from './RestaurantItem.module.css'

/**
 * 식당 목록에서 개별 식당을 표시하는 카드 컴포넌트
 *
 * - 썸네일, 이름, 주소, 별점 등 표시 (기본 이미지 fallback 포함)
 *
 * @param {Object} props
 * @param {object} props.restaurant - 식당 데이터 객체
 */

export const RestaurantItem = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.location_id}`} className={styles.container}>
      <img
        src={restaurant.thumb_nail || defaultImage}
        alt='대표 이미지'
        className={styles.image}
        onError={(e) => {
          e.target.src = defaultImage
        }}
      />
      <div className={styles.info}>
        <p className={styles.name}>{restaurant.name}</p>
        <div className={styles.rating}>
          <Icon name={'review-fill'} size={20} />
          <span>3</span>
          {/* <span>{restaurant.rating}</span> */}
        </div>
        <p className={styles.address}>{restaurant.address}</p>
      </div>
    </Link>
  )
}
