import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'

import mapPing from '@/assets/map/map-ping.svg'

import { RestaurantMapOverlay } from './RestaurantMapOverlay'

/**
 * 카카오맵에 마커를 생성하고 오버레이 렌더링
 *
 * - 마커 클릭 시 React 포털로 오버레이 UI 표시
 * - 지도 클릭 또는 오버레이 외부 클릭 시 닫힘
 * - unmount 시 마커, 오버레이 정리 수행
 *
 * @param {Object} props
 * @param {object} props.map - Kakao Map 인스턴스
 * @param {Array} props.restaurants - 렌더링할 식당 정보 배열
 */
export const RestaurantMapMarkers = ({ map, restaurants }) => {
  const [selected, setSelected] = useState(null)

  const overlayContainerRef = useRef(null)
  const overlayRef = useRef(null)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!window.kakao || !map) return

    const { kakao } = window

    const imageSize = new kakao.maps.Size(24, 24)
    const imageOption = { offset: new kakao.maps.Point(12, 24) }
    const markerImage = new kakao.maps.MarkerImage(mapPing, imageSize, imageOption)

    const markers = restaurants.map((info) => {
      const position = new kakao.maps.LatLng(info.latitude, info.longitude)

      const marker = new kakao.maps.Marker({
        position,
        title: info.title,
        image: markerImage,
      })

      marker.setMap(map)

      kakao.maps.event.addListener(marker, 'click', () => {
        setSelected({ ...info, position })
      })

      return marker
    })

    return () => {
      markers.forEach((marker) => marker.setMap(null))
    }
  }, [map, restaurants])

  useEffect(() => {
    if (!window.kakao || !map || !selected) return

    const container = document.createElement('div')
    container.style.position = 'relative'
    container.style.zIndex = '100'
    overlayContainerRef.current = container

    const root = createRoot(container)
    rootRef.current = root

    root.render(
      <div
        role='button'
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.stopPropagation()
          }
        }}
      >
        <RestaurantMapOverlay
          id={selected.location_id}
          name={selected.name}
          category={selected.category}
          phone={selected.phone || ''}
          rating={5}
          onClose={() => setSelected(null)}
        />
      </div>,
    )

    const overlay = new window.kakao.maps.CustomOverlay({
      content: container,
      position: selected.position,
      xAnchor: 0.5,
      yAnchor: 1.1,
    })

    overlay.setMap(map)
    overlayRef.current = overlay

    const handleClickOutside = (e) => {
      if (!overlayContainerRef.current?.contains(e.target)) {
        setSelected(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      overlay.setMap(null)
      root.unmount()
      container.remove()
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [map, selected])

  return null
}
