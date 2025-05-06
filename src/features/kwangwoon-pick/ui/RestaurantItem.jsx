import { Link } from 'react-router'

import defaultImage from '@/assets/defaultImage.png'
import { Icon } from '@/components/Icon/Icon'

import styles from './RestaurantItem.module.css'

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
