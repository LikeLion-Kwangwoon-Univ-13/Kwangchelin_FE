import { useNavigate } from 'react-router'

import { YellowButton } from '@/components/Button/YellowButton'
import { CategoryFilterTagList } from '@/components/CategoryFilterTagList'
import { MainLayout } from '@/components/MainLayout/MainLayout'
import { CATEGORY_LIST } from '@/constants'
import { RestaurantMap } from '@/features/restaurant-map/ui'
import { useSelectedCategory } from '@/hooks'

import styles from './RestaurantMapPage.module.css'

export const RestaurantMapPage = () => {
  const navigate = useNavigate()
  const selectedCategory = useSelectedCategory()

  const handleCategoryClick = (category) => {
    const nextCategory = selectedCategory === category ? null : category

    const params = new URLSearchParams()
    if (nextCategory) params.set('category', nextCategory)

    navigate({ pathname: '/restaurant', search: params.toString() }, { replace: true })
  }

  const handleViewListClick = () => {
    navigate('/restaurant/list')
  }

  return (
    <MainLayout title={'광운대 근처 맛집'} hasSearch searchBaseURL={'/restaurant'}>
      <div className={styles.container}>
        <CategoryFilterTagList
          categoryList={['전체', ...CATEGORY_LIST]}
          selectedCategory={selectedCategory}
          onClickCategory={handleCategoryClick}
        />

        <RestaurantMap />

        <YellowButton onClick={handleViewListClick} className={styles.button}>
          목록 보기
        </YellowButton>
      </div>
    </MainLayout>
  )
}
