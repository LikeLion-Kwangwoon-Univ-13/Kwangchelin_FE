import { Link } from 'react-router'

import { Icon } from '@/components'
import { useSearchKeyword, useSelectedCategory } from '@/hooks'

import { fetchFilteredRestaurantList } from '../domain/api/fetchFilteredRestaurantList'
import styles from './RestaurantList.module.css'

/**
 * 필터링된 맛집 리스트 UI 컴포넌트
 *
 * - selectedCategory, searchKeyword 기반 데이터 필터링
 * - 각 식당을 Link 카드로 출력
 */

export const RestaurantList = () => {
  const selectedCategory = useSelectedCategory()
  const searchKeyword = useSearchKeyword()

  const filteredData = fetchFilteredRestaurantList(
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
