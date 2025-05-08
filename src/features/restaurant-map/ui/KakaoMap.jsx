import { useEffect, useRef } from 'react'

import styles from './KakaoMap.module.css'

export const KakaoMap = ({ id, center, level = 3, onCreate }) => {
  const mapRef = useRef(null)

  useEffect(() => {
    if (!window.kakao) return
    const { kakao } = window

    const container = document.getElementById(id)
    const options = {
      center: new kakao.maps.LatLng(center.lat, center.lng),
      level,
    }

    const map = new kakao.maps.Map(container, options)
    mapRef.current = map

    onCreate?.(map)

    return () => {
      container.innerHTML = ''
    }
  }, [id, center.lat, center.lng, level, onCreate])

  return <div id={id} className={styles.map} />
}
