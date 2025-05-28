import clsx from 'clsx'
import { useState } from 'react'

import styles from './RestaurantTab.module.css'
import { RestaurantReview } from './RestaurantReview'
import { RestaurantLocation } from './RestaurantLocation'

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
        {
          /*
          TODO: 선택된 탭(selectedTab)에 따라 다른 컴포넌트를 보여주도록 조건부 렌더링을 해보세요.
          - 'location'이면 RestaurantLocation 컴포넌트를 렌더링합니다.
            - 위도(latitude), 경도(longitude)를 props로 전달해야 해요.

          - 'review'이면 RestaurantReview 컴포넌트를 렌더링합니다.
            - 평균 평점, 총 리뷰 수, 평점 분포(scores)를 props로 넘겨야 해요.

          - && 연산자를 활용한 조건부 렌더링을 사용해 보세요.
        */
          selectedTab === 'location' && <RestaurantLocation lat={latitude} lng={longitude} />
        }
        {selectedTab === 'review' && (
          <RestaurantReview average={average} totalReviews={totalReviews} scores={scores} />
        )}
      </div>
    </div>
  )
}
