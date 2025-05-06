import { useParams } from 'react-router'

import { Icon } from '@/components/Icon/Icon'
import { MainLayout } from '@/components/MainLayout/MainLayout'
import { RestaurantTab } from '@/features/restaurant/ui/RestaurantTab'
import { getRestaurantById } from '@/mock/restaurantUtils'

import styles from './RestaurantDetailPage.module.css'

export const RestaurantDetailPage = () => {
  const { restaurantId } = useParams()
  const detailData = getRestaurantById(restaurantId)

  const { name, address, distance, phone, thumb_nail } = detailData

  return (
    <MainLayout title={'상세 정보'} hasBackgroundColor>
      <div>
        <img src={thumb_nail} alt='식당 이미지' className={styles.image} />
        <section className={styles.restaurant}>
          <div className={styles.header}>
            <h3 className={styles.name}>{name}</h3>
            <Icon name={'review-fill'} size={20} />
            <span className={styles.rating}>3</span>
            {/* <span>{rating}</span> */}
          </div>

          <div className={styles.metadata}>
            <div>
              <Icon name={'map-location'} size={20} />
              <p className={styles.description}>{address}</p>
            </div>
            <div>
              <Icon name={'map-school'} size={20} />
              <p className={styles.description}>{distance}</p>
            </div>
            <div>
              <Icon name={'map-phone'} size={20} />
              <p className={styles.description}>{phone}</p>
            </div>
          </div>
        </section>

        <div className={styles.divider} />

        <RestaurantTab detailData={detailData} />
      </div>
    </MainLayout>
  )
}
