import { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'

import mapPing from '@/assets/map/map-ping.svg'

import { RestaurantMapOverlay } from './RestaurantMapOverlay'

export const RestaurantMapMarkers = ({ map, restaurants }) => {
  const overlayContainerRef = useRef(document.createElement('div'))
  const rootRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!window.kakao || !map) return

    const { kakao } = window

    const container = overlayContainerRef.current
    document.body.appendChild(container)

    const root = createRoot(container)
    rootRef.current = root

    const overlay = new kakao.maps.CustomOverlay({
      xAnchor: 0.5,
      yAnchor: 1.1,
      content: container,
    })
    overlayRef.current = overlay

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
        root.render(
          <RestaurantMapOverlay
            id={info.location_id}
            name={info.name}
            category={info.category}
            phone={info.phone || ''}
            score={5}
          />,
        )
        overlay.setPosition(position)
        overlay.setMap(map)
      })

      return marker
    })

    return () => {
      markers.forEach((marker) => marker.setMap(null))
      overlay.setMap(null)

      setTimeout(() => {
        root.unmount()
        container.remove()
      }, 0)
    }
  }, [map, restaurants])

  return null
}
