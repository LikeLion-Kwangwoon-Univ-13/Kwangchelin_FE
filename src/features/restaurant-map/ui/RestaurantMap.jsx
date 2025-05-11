import { useState } from 'react'

import { useSearchKeyword, useSelectedCategory } from '@/hooks'
import { getFilteredRestaurants } from '@/mock'

import { SCHOOL_LAT, SCHOOL_LNG } from '../domain/constants/schoolLocation'
import { KakaoMap } from './KakaoMap'
import styles from './RestaurantMap.module.css'
import { RestaurantMapMarkers } from './RestaurantMapMarkers'

/**
 * 카카오맵 및 필터링된 맛집 마커 출력 컴포넌트
 *
 * - selectedCategory와 searchKeyword 기반으로 필터링된 식당 출력
 * - 내부에서 KakaoMap, RestaurantMapMarkers 사용
 */

export const RestaurantMap = () => {
  const [map, setMap] = useState(null)

  const selectedCategory = useSelectedCategory()
  const searchKeyword = useSearchKeyword()

  const restaurants = getFilteredRestaurants(
    selectedCategory === '전체' ? null : selectedCategory,
    searchKeyword,
  )

  if (!restaurants) return null

  return (
    <div className={styles.container}>
      <KakaoMap id='map' center={{ lat: SCHOOL_LAT, lng: SCHOOL_LNG }} onCreate={setMap} />
      <RestaurantMapMarkers map={map} restaurants={restaurants} />
    </div>
  )
}
