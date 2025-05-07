import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'

import mapPing from '@/assets/map/map-ping.svg'
import { getRestaurantsByCategory } from '@/mock/restaurantUtils'

import { RestaurantMapOverlay } from '../RestaurantMapOverlay'
import styles from './RestaurantMap.module.css'

const DEFAULT_LAT = 37.6194277
const DEFAULT_LNG = 127.05982

export const RestaurantMap = ({ selectedCategory }) => {
  const [map, setMap] = useState(null)

  const overlayContainerRef = useRef(document.createElement('div'))
  const rootRef = useRef(null)
  const overlayRef = useRef(null)

  //처음 지도 그리기
  useEffect(() => {
    if (!window.kakao) return

    const { kakao } = window

    //지도를 담을 영역의 DOM 레퍼런스
    const container = document.getElementById('map')

    //지도를 생성할 때 필요한 기본 옵션 (중심 좌표, 레벨)
    const options = { center: new kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG) }

    //지도 생성 및 객체 리턴
    const kakaoMap = new kakao.maps.Map(container, options)

    setMap(kakaoMap)

    rootRef.current = createRoot(overlayContainerRef.current)

    overlayRef.current = new kakao.maps.CustomOverlay({
      xAnchor: 0.5,
      yAnchor: 1.1,
      content: overlayContainerRef.current,
    })

    return () => {
      // 지도를 DOM에서 제거
      if (container) {
        container.innerHTML = ''
      }

      // 오버레이 해제
      overlayRef.current?.setMap(null)

      // React root 언마운트
      rootRef.current?.unmount()

      // map state 초기화
      setMap(null)
    }
  }, [])

  useEffect(() => {
    if (!window.kakao) return

    const { kakao } = window

    const imageSize = new kakao.maps.Size(24, 24)
    const imageOption = { offset: new kakao.maps.Point(12, 24) }
    const markerImage = new kakao.maps.MarkerImage(mapPing, imageSize, imageOption)

    const root = rootRef.current
    const overlay = overlayRef.current

    const filteredData = getRestaurantsByCategory(selectedCategory)

    const markers = []

    filteredData.forEach((markerInfo) => {
      const position = new kakao.maps.LatLng(markerInfo.latitude, markerInfo.longitude)

      // 마커 생성
      const marker = new kakao.maps.Marker({
        position,
        title: markerInfo.title,
        image: markerImage,
      })

      // 마커가 지도 위에 표시되도록 설정
      marker.setMap(map)

      // 마커 클릭 → 오버레이 렌더링
      kakao.maps.event.addListener(marker, 'click', () => {
        // React 컴포넌트를 오버레이로 렌더링
        root.render(
          <RestaurantMapOverlay
            id={markerInfo.location_id}
            name={markerInfo.name}
            category={markerInfo.category}
            phone={markerInfo.phone || ''}
            score={5}
          />,
        )

        overlayRef.current.setPosition(position)
        overlayRef.current.setMap(map)
      })

      markers.push(marker)
    })

    return () => {
      markers.forEach((marker) => marker.setMap(null))
      overlay.setMap(null)
    }
  }, [map, selectedCategory])

  return (
    <div className={styles.container}>
      <div id='map' className={styles.map}></div>
    </div>
  )
}
