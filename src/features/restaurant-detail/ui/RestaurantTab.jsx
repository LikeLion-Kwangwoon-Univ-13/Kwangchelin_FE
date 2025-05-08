import clsx from 'clsx'
import { useState } from 'react'

import { RestaurantLocation } from './RestaurantLocation'
import { RestaurantReview } from './RestaurantReview'
import styles from './RestaurantTab.module.css'

const TAB_LIST = [
  { id: 'location', label: '위치' },
  { id: 'review', label: '리뷰' },
]

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
