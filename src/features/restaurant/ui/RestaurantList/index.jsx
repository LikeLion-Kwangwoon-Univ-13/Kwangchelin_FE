import { Icon } from '@/components/Icon/Icon'
import { getRestaurantsByCategory } from '@/mock/restaurantUtils'

import styles from './RestaurantList.module.css'

export const RestaurantList = ({ selectedCategory }) => {
  const filteredData = getRestaurantsByCategory(selectedCategory)

  return (
    <section className={styles.container}>
      {filteredData.map(({ location_id, name, rating, distance, address }) => (
        <div key={location_id} className={styles.item}>
          <div className={styles.header}>
            <p className={styles.name}>{name}</p>
            <p className={styles.distance}>{distance}m</p>
          </div>
          <div className={styles.content}>
            <div className={styles.rating}>
              <Icon name={'review-fill'} size={20} />
              <span>{3}</span>
            </div>
            <div className={styles.location}>
              <Icon name={'map-location'} size={20} />
              <span>{address}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
