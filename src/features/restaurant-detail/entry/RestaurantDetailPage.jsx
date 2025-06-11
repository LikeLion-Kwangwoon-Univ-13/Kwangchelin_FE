import { useParams } from 'react-router'

import { MainLayout } from '@/components'

import { useRestaurantDetail } from '../hooks/useRestaurantDetail'

export const RestaurantDetailPage = () => {
  const { restaurantId } = useParams()
  const { detailData, isLoading, isError } = useRestaurantDetail(restaurantId)

  // TODO: 로딩 중일 때 보여줄 화면

  // TODO: 오류 발생 시 보여줄 화면

  // TODO: 데이터가 없을 때 보여줄 화면

  return (
    <MainLayout title={'상세 정보'}>
      <div>
        {/* TODO: 데이터 형식에 맞게 아래 주석 풀고 값 변경하기 */}
        {/* <RestaurantSummary
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
        /> */}
      </div>
    </MainLayout>
  )
}
