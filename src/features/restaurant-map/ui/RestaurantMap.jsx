import { useState } from 'react'

import { useSearchKeyword, useSelectedCategory } from '@/hooks'
import { getFilteredRestaurants } from '@/mock'

import { SCHOOL_LAT, SCHOOL_LNG } from '../domain/constants'
import { KakaoMap } from './KakaoMap'
import styles from './RestaurantMap.module.css'
import { RestaurantMapMarkers } from './RestaurantMapMarkers'

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
