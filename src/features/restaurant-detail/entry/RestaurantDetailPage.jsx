import { useParams } from 'react-router'

import { MainLayout } from '@/components'

import { useRestaurantDetail } from '../hooks/useRestaurantDetail'
import { RestaurantSummary } from '../ui/RestaurantSummary'
import { RestaurantTab } from '../ui/RestaurantTab'
import styles from './RestaurantDetailPage.module.css'

export const RestaurantDetailPage = () => {
  const { restaurantId } = useParams()

  const { detailData, isLoading, isError } = useRestaurantDetail(restaurantId)

  // TODO: 로딩 중일 때 보여줄 화면
  if (isLoading) {
    return (
      <MainLayout title='상세 정보'>
        <div>로딩 중...</div>
      </MainLayout>
    )
  }

  // TODO: 오류 발생 시 보여줄 화면
  if (isError) {
    return (
      <MainLayout title='상세 정보'>
        <div>오류가 발생했습니다.</div>
      </MainLayout>
    )
  }

  // TODO: 데이터가 없을 때 보여줄 화면
  if (!detailData) {
    return (
      <MainLayout title='상세 정보'>
        <div>데이터가 없습니다.</div>
      </MainLayout>
    )
  }

  return (
    <MainLayout title={'상세 정보'}>
      <div>
        {/* TODO: 데이터 형식에 맞게 아래 주석 풀고 값 변경하기 */}
        <RestaurantSummary
          thumb_nail={detailData.imageUrl}
          name={detailData.name}
          address={detailData.address}
          distance={detailData.distance}
          phone={detailData.phone}
        />

        <div className={styles.divider} />

        <RestaurantTab
          latitude={detailData.latitude}
          longitude={detailData.longitude}
          average={detailData.averageRating}
          totalReviews={detailData.reviewCount}
          scores={detailData.ratingsCount}
        />
      </div>
    </MainLayout>
  )
}
