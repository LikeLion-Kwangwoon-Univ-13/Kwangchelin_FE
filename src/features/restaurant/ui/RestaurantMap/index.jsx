import { useEffect, useState } from 'react'

import styles from './RestaurantMap.module.css'

const { kakao } = window

export const RestaurantMap = () => {
  const [_, setMap] = useState(null)

  //처음 지도 그리기
  useEffect(() => {
    //지도를 담을 영역의 DOM 레퍼런스
    const container = document.getElementById('map')

    //지도를 생성할 때 필요한 기본 옵션 (중심 좌표, 레벨)
    const options = { center: new kakao.maps.LatLng(37.6194277, 127.05982) }

    //지도 생성 및 객체 리턴
    const kakaoMap = new kakao.maps.Map(container, options)

    setMap(kakaoMap)
  }, [])

  return (
    <div className={styles.container}>
      <div id='map' className={styles.map}></div>
    </div>
  )
}
