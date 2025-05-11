import { useEffect, useRef } from 'react'

import styles from './KakaoMap.module.css'

/**
 * 카카오 지도를 초기화하고 렌더링하는 컴포넌트
 *
 * @param {Object} props
 * @param {string} props.id - 지도를 렌더링할 DOM 요소의 id
 * @param {{ lat: number, lng: number }} props.center - 지도 중심 좌표
 * @param {number} [props.level=3] - 지도 줌 레벨 (작을수록 확대)
 * @param {(map: kakao.maps.Map) => void} [props.onCreate] - 지도 인스턴스 생성 후 콜백
 */

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
