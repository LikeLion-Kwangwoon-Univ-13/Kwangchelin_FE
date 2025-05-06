import { useEffect, useState } from 'react'

import mapPing from '@/assets/map/map-ping.svg'

import styles from './RestaurantLocation.module.css'

export const RestaurantLocation = ({ lat, lng }) => {
  const [_, setMap] = useState(null)

  useEffect(() => {
    if (!window.kakao) return

    const { kakao } = window

    const imageSize = new kakao.maps.Size(24, 24)
    const imageOption = { offset: new kakao.maps.Point(12, 24) }
    const markerImage = new kakao.maps.MarkerImage(mapPing, imageSize, imageOption)

    const container = document.getElementById('restaurant-map')

    const options = { center: new kakao.maps.LatLng(lat, lng) }
    const kakaoMap = new kakao.maps.Map(container, options)

    kakaoMap.setDraggable(false)
    kakaoMap.setZoomable(false)
    setMap(kakaoMap)

    const position = new kakao.maps.LatLng(lat, lng)

    const marker = new kakao.maps.Marker({
      position,
      image: markerImage,
    })

    marker.setMap(kakaoMap)
  }, [])

  return (
    <section>
      <h4 className={styles.title}>식당 상세 위치</h4>
      <div id='restaurant-map' className={styles.map}></div>
    </section>
  )
}
