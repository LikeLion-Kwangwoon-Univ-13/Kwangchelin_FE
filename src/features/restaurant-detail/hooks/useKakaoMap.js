import { useEffect, useRef } from 'react'

import mapPing from '@/assets/map/map-ping.svg'

/**
 * 특정 좌표 기준의 카카오 지도와 마커를 생성하는 커스텀 훅
 *
 * - 지도를 드래그 및 줌 불가 상태로 고정
 * - ref 기반으로 외부에서 렌더링할 div에 지도 출력
 *
 * @param {Object} props
 * @param {React.RefObject} props.containerRef - 지도를 렌더링할 DOM 요소 ref
 * @param {number} props.lat - 중심 위도
 * @param {number} props.lng - 중심 경도
 */

export const useKakaoMap = ({ containerRef, lat, lng }) => {
  const mapRef = useRef(null)
  const markerRef = useRef(null)

  useEffect(() => {
    if (!window.kakao || !containerRef.current) return

    const { kakao } = window

    const map = new kakao.maps.Map(containerRef.current, {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3,
    })

    map.setDraggable(false)
    map.setZoomable(false)
    mapRef.current = map

    const markerImage = new kakao.maps.MarkerImage(mapPing, new kakao.maps.Size(24, 24), {
      offset: new kakao.maps.Point(12, 24),
    })

    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(lat, lng),
      image: markerImage,
    })

    marker.setMap(map)
    markerRef.current = marker

    return () => {
      marker.setMap(null)
      mapRef.current = null
    }
  }, [containerRef, lat, lng])
}
