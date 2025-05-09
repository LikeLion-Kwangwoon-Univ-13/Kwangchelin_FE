import { Link } from 'react-router'

import { Icon } from '@/components/Icon/Icon'
import { useSearchKeyword } from '@/hooks/useSearchKeword'
import { useSelectedCategory } from '@/hooks/useSelectedCategory'
import { getFilteredRestaurants } from '@/mock/restaurantUtils'

import styles from './RestaurantList.module.css'

export const RestaurantList = () => {
  const selectedCategory = useSelectedCategory()
  const searchKeyword = useSearchKeyword()

  const filteredData = getFilteredRestaurants(
    selectedCategory === '전체' ? null : selectedCategory,
    searchKeyword,
  )

  return (
    <section className={styles.container}>
      {filteredData.map(({ location_id, name, distance, address }) => (
        <Link to={`/restaurant/${location_id}`} key={location_id} className={styles.item}>
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
        </Link>
      ))}
    </section>
  )
}
