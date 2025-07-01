import { useRef } from 'react'
import { Link } from 'react-router'

import { Icon } from '@/components'
import { useIntersectionObserver, useSearchKeyword, useSelectedCategory } from '@/hooks'

import { useRestaurantList } from '../hooks/useRestaurantList'
import styles from './RestaurantList.module.css'

/**
 * 필터링된 맛집 리스트 UI 컴포넌트
 *
 * - selectedCategory, searchKeyword 기반 데이터 필터링
 * - 각 식당을 Link 카드로 출력
 */

export const RestaurantList = () => {
  const observerRef = useRef(null)
  const selectedCategory = useSelectedCategory()
  const searchKeyword = useSearchKeyword()

  const { enabled, restaurantList, loadNextPage, isError, isLoading } = useRestaurantList({
    category: selectedCategory,
    keyword: searchKeyword,
  })

  useIntersectionObserver(observerRef, loadNextPage, enabled)

  // TODO: 로딩 중일 때 처리
  if (isLoading && restaurantList.length === 0) {
    return <div>로딩 중입니다...</div>
  }

  // TODO: 오류 발생 시 처리
  if (isError) {
    return <div>오류가 발생했습니다.</div>
  }

  // TODO: 데이터가 없을 때 처리
  if (!isLoading && restaurantList.length === 0) {
    return <div>검색 결과가 없습니다.</div>
  }

  return (
    <section className={styles.container}>
      {restaurantList.map(({ location_id, name, distance, address }) => (
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
      <div ref={observerRef} style={{ height: 1 }} />
    </section>
  )
}
