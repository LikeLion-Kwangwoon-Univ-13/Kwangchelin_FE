import clsx from 'clsx'
import { useState } from 'react'

import { RestaurantLocation } from './RestaurantLocation'
import { RestaurantReview } from './RestaurantReview'
import styles from './RestaurantTab.module.css'

const TAB_LIST = [
  { id: 'location', label: '위치' },
  { id: 'review', label: '리뷰' },
]

/**
 * 상세 페이지 탭 (위치 / 리뷰)
 *
 * - 탭 전환에 따라 위치 지도 또는 리뷰 표시
 *
 * @param {Object} props
 * @param {number} props.latitude - 위도
 * @param {number} props.longitude - 경도
 * @param {number} props.average - 평균 평점
 * @param {number} props.totalReviews - 총 리뷰 수
 * @param {Object} props.scores - 평점 분포 객체
 */

export const RestaurantTab = ({ latitude, longitude, average, totalReviews, scores }) => {
  const [selectedTab, setSelectedTab] = useState(TAB_LIST[0].id)

  return (
    <div className={styles.container}>
      <div className={styles.tabList}>
        {TAB_LIST.map(({ id, label }) => (
          <button
            key={id}
            className={clsx(styles.tabButton, selectedTab === id ? styles.active : '')}
            onClick={() => setSelectedTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles.tabPanel}>
        {selectedTab === 'location' && <RestaurantLocation lat={latitude} lng={longitude} />}
        {selectedTab === 'review' && (
          <RestaurantReview average={average} totalReviews={totalReviews} scores={scores} />
        )}
      </div>
    </div>
  )
}
