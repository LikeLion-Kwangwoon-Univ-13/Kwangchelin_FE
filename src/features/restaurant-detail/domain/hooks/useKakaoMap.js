import { useEffect, useRef } from 'react'

import mapPing from '@/assets/map/map-ping.svg'

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
