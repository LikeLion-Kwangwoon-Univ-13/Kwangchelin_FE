import { useEffect, useState } from 'react'

import mapPing from '@/assets/map/map-ping.svg'
import { RESTAURANT_DUMMY_DATA } from '@/mock/restaurantDummyData'

import styles from './RestaurantMap.module.css'

export const RestaurantMap = () => {
  const [_, setMap] = useState(null)

  //처음 지도 그리기
  useEffect(() => {
    if (!window.kakao) return

    const { kakao } = window

    //지도를 담을 영역의 DOM 레퍼런스
    const container = document.getElementById('map')

    //지도를 생성할 때 필요한 기본 옵션 (중심 좌표, 레벨)
    const options = { center: new kakao.maps.LatLng(37.6194277, 127.05982) }

    //지도 생성 및 객체 리턴
    const kakaoMap = new kakao.maps.Map(container, options)

    setMap(kakaoMap)

    const imageSize = new kakao.maps.Size(24, 24)
    const imageOption = { offset: new kakao.maps.Point(20, 40) }
    const markerImage = new kakao.maps.MarkerImage(mapPing, imageSize, imageOption)

    RESTAURANT_DUMMY_DATA.forEach((markerInfo) => {
      const markerPosition = new kakao.maps.LatLng(markerInfo.latitude, markerInfo.longitude)

      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        title: markerInfo.title,
        image: markerImage,
      })

      // 마커가 지도 위에 표시되도록 설정합니다

      marker.setMap(kakaoMap)
    })
  }, [])

  return (
    <div className={styles.container}>
      <div id='map' className={styles.map}></div>
    </div>
  )
}
