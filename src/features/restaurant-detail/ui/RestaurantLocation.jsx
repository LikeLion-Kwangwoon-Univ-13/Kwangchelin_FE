import { useRef } from 'react'

import { useKakaoMap } from '../hooks/useKakaoMap'
import styles from './RestaurantLocation.module.css'

/**
 * 카카오 지도 위에 식당 위치 출력 컴포넌트
 *
 * @param {Object} props
 * @param {number} props.lat - 위도
 * @param {number} props.lng - 경도
 */

export const RestaurantLocation = ({ lat, lng }) => {
  const containerRef = useRef(null)

  useKakaoMap({
    containerRef,
    lat,
    lng,
  })

  return (
    <section className={styles.container}>
      <h4 className={styles.title}>식당 상세 위치</h4>
      <div ref={containerRef} className={styles.map}></div>
      <div className={styles.foreground} />
    </section>
  )
}
