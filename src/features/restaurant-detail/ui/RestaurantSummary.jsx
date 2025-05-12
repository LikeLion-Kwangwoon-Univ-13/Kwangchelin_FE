import { useState } from 'react'

import { Icon } from '@/components'

import styles from './RestaurantSummary.module.css'

const ThumbNail = ({ src }) => {
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return (
      <div className={styles.defaultBackground}>
        <Icon name='map-detail-default' size={74} />
        <p>사진 준비 중이에요! 곧 업데이트할게요 :)</p>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt='식당 이미지'
      className={styles.thumbnail}
      onError={() => setHasError(true)}
    />
  )
}

/**
 * 식당의 썸네일, 이름, 주소, 거리, 전화번호 요약 정보 표시
 *
 * @param {Object} props
 * @param {string} props.thumb_nail - 이미지 URL
 * @param {string} props.name - 식당 이름
 * @param {string} props.address - 주소
 * @param {string} props.distance - 거리(m)
 * @param {string} props.phone - 전화번호
 */

export const RestaurantSummary = ({ thumb_nail, name, address, distance, phone }) => {
  const metadata = [
    { icon: 'map-location', label: address },
    { icon: 'map-school', label: `${distance}m` },
    { icon: 'map-phone', label: phone },
  ]

  return (
    <>
      <ThumbNail src={thumb_nail} />

      <section className={styles.info}>
        <div className={styles.header}>
          <h3 className={styles.name}>{name}</h3>
          <Icon name={'review-fill'} size={20} />
          <span className={styles.rating}>3</span>
          {/* <span>{rating}</span> */}
        </div>

        <div className={styles.metaList}>
          {/*
            TODO: 식당의 주소, 거리, 전화번호를 아이콘과 함께 보여주는 정보를 렌더링해 보세요.
            - metadata 배열을 map으로 순회하면서 출력합니다.
            - 각 항목에는 icon과 label이 포함되어 있어요.
            - 아이콘은 <Icon name={icon} size={20} />으로, 텍스트는 <p>로 표시해 보세요.
            - key에는 icon을 사용하고, 스타일 클래스도 잊지 마세요!
          */}
        </div>
      </section>
    </>
  )
}
