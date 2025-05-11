import { useParams } from 'react-router'

import { MainLayout } from '@/components'
import { REVIEW_SUMMARY_DUMMY_DATA } from '@/mock'

import { fetchRestaurantDetail } from '../domain/api/fetchRestaurantDetail'
import { RestaurantSummary } from '../ui/RestaurantSummary'
import { RestaurantTab } from '../ui/RestaurantTab'
import styles from './RestaurantDetailPage.module.css'

export const RestaurantDetailPage = () => {
  const { restaurantId } = useParams()

  const detailData = fetchRestaurantDetail(restaurantId)

  const { name, address, distance, phone, thumb_nail, latitude, longitude } = detailData
  const { average, totalReviews, scores } = REVIEW_SUMMARY_DUMMY_DATA

  return (
    <MainLayout title={'상세 정보'}>
      <div>
        <RestaurantSummary
          thumb_nail={thumb_nail}
          name={name}
          address={address}
          distance={distance}
          phone={phone}
        />

        <div className={styles.divider} />

        <RestaurantTab
          latitude={latitude}
          longitude={longitude}
          average={average}
          totalReviews={totalReviews}
          scores={scores}
        />
      </div>
    </MainLayout>
  )
}
