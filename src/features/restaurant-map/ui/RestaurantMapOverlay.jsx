import { Icon } from '@/components'

import styles from './RestaurantMapOverlay.module.css'

/**
 * 마커 클릭 시 표시되는 오버레이 UI 컴포넌트
 *
 * - 식당 이름, 카테고리, 전화번호, 평점, 상세 링크 포함
 * @param {Object} props
 * @param {string} props.id - 식당 id
 * @param {string} props.name - 식당 이름
 * @param {string} props.category - 카테고리
 * @param {string} props.phone - 전화번호
 * @param {number} props.rating - 평점
 */

export const RestaurantMapOverlay = ({ id, name, category, phone, rating }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.name}>{name}</p>
        <span className={styles.description}>{category}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.metadata}>
          <Icon name={'map-phone'} size={18} />
          <span className={styles.description}>{phone}</span>
        </div>

        <div className={styles.metadata}>
          <Icon name={'review-fill'} size={20} />
          <span className={styles.description}>{rating}</span>
        </div>
      </div>

      <a href={`/restaurant/${id}`} className={styles.description}>
        상세정보
      </a>
    </div>
  )
}
