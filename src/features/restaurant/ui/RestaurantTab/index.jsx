import clsx from 'clsx'
import { useState } from 'react'

import { RestaurantLocation } from '../RestaurantLocation'
import { RestaurantReview } from '../RestaurantReview'
import styles from './RestaurantTab.module.css'

const TABS = [
  { id: 'location', label: '위치' },
  { id: 'review', label: '리뷰' },
]

export const RestaurantTab = ({ detailData }) => {
  const [selectedTab, setSelectedTab] = useState('location')

  return (
    <div className={styles.container}>
      <div className={styles.tabList}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={clsx(styles.tabButton, selectedTab === tab.id ? styles.active : '')}
            onClick={() => setSelectedTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.tabPanel}>
        {selectedTab === 'location' && (
          <RestaurantLocation lat={detailData.latitude} lng={detailData.longitude} />
        )}
        {selectedTab === 'review' && <RestaurantReview />}
      </div>
    </div>
  )
}
