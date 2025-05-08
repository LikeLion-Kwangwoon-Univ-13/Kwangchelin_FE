import { useRef } from 'react'

import { useKakaoMap } from '../domain/hooks/useKakaoMap'
import styles from './RestaurantLocation.module.css'

export const RestaurantLocation = ({ lat, lng }) => {
  const containerRef = useRef(null)

  useKakaoMap({
    containerRef,
    lat,
    lng,
  })

  return (
    <section>
      <h4 className={styles.title}>식당 상세 위치</h4>
      <div ref={containerRef} className={styles.map}></div>
    </section>
  )
}
