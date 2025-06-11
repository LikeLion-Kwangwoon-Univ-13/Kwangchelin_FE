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
 * @param {string} props.totalReviews - 평점
 */

export const RestaurantSummary = ({ thumb_nail, name, address, distance, phone, totalReviews }) => {
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
          <span className={styles.rating}>{totalReviews}</span>
          {/* <span>{rating}</span> */}
        </div>

        <div className={styles.metaList}>
          {metadata.map(({ icon, label }) => (
            <div key={icon} className={styles.metaItem}>
              <Icon name={icon} size={20} />
              <p className={styles.metaText}>{label || ''}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
