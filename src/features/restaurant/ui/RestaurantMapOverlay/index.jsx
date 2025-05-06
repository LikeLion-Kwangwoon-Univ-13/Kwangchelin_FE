import { Icon } from '@/components/Icon/Icon'

import styles from './RestaurantMapOverlay.module.css'

export const RestaurantMapOverlay = ({ id, name, category, phone, rating }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.name}>{name}</p>
        <span className={styles.description}>{category}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.metadata}>
          <Icon name={'map-phone'} size={18} />
          <span className={styles.description}>{phone}</span>
        </div>

        <div className={styles.metadata}>
          <Icon name={'review-fill'} size={20} />
          <span className={styles.description}>{rating}</span>
        </div>
      </div>

      <a href={`/restaurant/${id}`} className={styles.description}>
        상세정보
      </a>
    </div>
  )
}
